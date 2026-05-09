import { EntityManager } from '@mikro-orm/postgresql';
import { ELK_LAYOUT_OPTIONS, NODE_SIZE } from '@modules/graph/graph.constants';
import { Injectable, Logger } from '@nestjs/common';
import ELK, { type ElkNode } from 'elkjs/lib/elk.bundled.js';
import Graph from 'graphology';
import louvain from 'graphology-communities-louvain';

interface BuildResult {
  nodeCount: number;
  edgeCount: number;
  componentCount: number;
  communityCount: number;
  durationMs: number;
}

interface LayoutRow {
  uuid: string;
  x: number;
  y: number;
  community: number;
  component: number;
}

@Injectable()
export class LayoutBuilderService {
  private readonly logger = new Logger(LayoutBuilderService.name);

  constructor(private readonly em: EntityManager) {}

  async rebuild(): Promise<BuildResult> {
    const startedAt = Date.now();
    const knex = this.em.getKnex();

    const { rows: issueRows } = await knex.raw<{
      rows: { uuid: string }[];
    }>(`SELECT uuid FROM issues WHERE deleted_at IS NULL`);
    const { rows: edgeRows } = await knex.raw<{
      rows: { from_uuid: string; to_uuid: string }[];
    }>(
      `SELECT re.from_uuid, re.to_uuid
       FROM reading_edges re
       JOIN issues f ON f.uuid = re.from_uuid AND f.deleted_at IS NULL
       JOIN issues t ON t.uuid = re.to_uuid   AND t.deleted_at IS NULL`,
    );

    if (issueRows.length === 0) {
      this.logger.warn('No issues found, skipping layout rebuild');
      return {
        nodeCount: 0,
        edgeCount: 0,
        componentCount: 0,
        communityCount: 0,
        durationMs: 0,
      };
    }

    const graph = new Graph({ type: 'undirected', multi: false });
    for (const row of issueRows) graph.addNode(row.uuid);
    for (const row of edgeRows) {
      if (
        graph.hasNode(row.from_uuid) &&
        graph.hasNode(row.to_uuid) &&
        !graph.hasEdge(row.from_uuid, row.to_uuid)
      )
        graph.addEdge(row.from_uuid, row.to_uuid);
    }

    const componentMap = this.computeComponents(graph);
    const communityMap = louvain(graph);
    const positions = await this.runElkLayout(graph);

    const upsertRows: LayoutRow[] = issueRows.map((row) => ({
      uuid: row.uuid,
      x: positions.get(row.uuid)?.x ?? 0,
      y: positions.get(row.uuid)?.y ?? 0,
      community: communityMap[row.uuid] ?? 0,
      component: componentMap.get(row.uuid) ?? 0,
    }));

    await this.persist(upsertRows);

    const componentCount = new Set(componentMap.values()).size;
    const communityCount = new Set(Object.values(communityMap)).size;
    const durationMs = Date.now() - startedAt;

    this.logger.log(
      `Layout rebuilt: ${issueRows.length} nodes, ${edgeRows.length} edges, ${componentCount} components, ${communityCount} communities in ${durationMs}ms`,
    );

    return {
      nodeCount: issueRows.length,
      edgeCount: edgeRows.length,
      componentCount,
      communityCount,
      durationMs,
    };
  }

  private computeComponents(graph: Graph): Map<string, number> {
    const componentMap = new Map<string, number>();
    let componentId = 0;

    graph.forEachNode((node) => {
      if (componentMap.has(node)) return;

      const stack = [node];
      while (stack.length > 0) {
        const current = stack.pop()!;
        if (componentMap.has(current)) continue;
        componentMap.set(current, componentId);
        graph.forEachNeighbor(current, (neighbor) => {
          if (!componentMap.has(neighbor)) stack.push(neighbor);
        });
      }

      componentId += 1;
    });

    return componentMap;
  }

  private async runElkLayout(
    graph: Graph,
  ): Promise<Map<string, { x: number; y: number }>> {
    const elk = new ELK();

    const elkGraph: ElkNode = {
      id: 'root',
      layoutOptions: ELK_LAYOUT_OPTIONS,
      children: graph.nodes().map((nodeId) => ({
        id: nodeId,
        width: NODE_SIZE,
        height: NODE_SIZE,
      })),
      edges: graph.edges().map((edgeId) => {
        const [source, target] = graph.extremities(edgeId);
        return { id: edgeId, sources: [source], targets: [target] };
      }),
    };

    const result = await elk.layout(elkGraph);
    const positions = new Map<string, { x: number; y: number }>();
    for (const child of result.children ?? [])
      positions.set(child.id, {
        x: Math.round(child.x ?? 0),
        y: Math.round(child.y ?? 0),
      });

    return positions;
  }

  private async persist(rows: LayoutRow[]): Promise<void> {
    const knex = this.em.getKnex();
    await knex.transaction(async (trx) => {
      await trx.raw('TRUNCATE TABLE "issue_layouts"');
      if (rows.length === 0) return;

      const chunkSize = 1000;
      for (let i = 0; i < rows.length; i += chunkSize) {
        const chunk = rows.slice(i, i + chunkSize);
        await trx('issue_layouts').insert(
          chunk.map((row) => ({
            issue_uuid: row.uuid,
            x: row.x,
            y: row.y,
            community_id: row.community,
            component_id: row.component,
          })),
        );
      }
    });
  }
}
