import { EntityManager } from '@mikro-orm/postgresql';
import { CLUSTER_LOD_AREA_THRESHOLD } from '@modules/graph/graph.constants';
import * as Types from '@modules/graph/graph.types';
import { Injectable } from '@nestjs/common';

interface WindowParams {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  visibleXMin?: number;
  visibleXMax?: number;
  visibleYMin?: number;
  visibleYMax?: number;
  componentId?: number;
  maxNodes: number;
}

interface DetailRow {
  uuid: string;
  x: number;
  y: number;
  community_id: number;
  component_id: number;
  title: string;
  published_at: Date;
  cover_url: Nullable<string>;
}

interface ClusterRow {
  community_id: number;
  component_id: number;
  centroid_x: number;
  centroid_y: number;
  x_min: number;
  x_max: number;
  y_min: number;
  y_max: number;
  node_count: number;
}

interface EdgeRow {
  fromUuid: string;
  toUuid: string;
}

@Injectable()
export class GraphService {
  constructor(private readonly em: EntityManager) {}

  async getWindow(params: WindowParams): Promise<Types.GetWindowResponse> {
    const knex = this.em.getKnex();
    const { xMin, xMax, yMin, yMax, componentId, maxNodes } = params;

    const visibleXMin = params.visibleXMin ?? xMin;
    const visibleXMax = params.visibleXMax ?? xMax;
    const visibleYMin = params.visibleYMin ?? yMin;
    const visibleYMax = params.visibleYMax ?? yMax;
    const visibleArea =
      Math.max(0, visibleXMax - visibleXMin) *
      Math.max(0, visibleYMax - visibleYMin);

    if (visibleArea > CLUSTER_LOD_AREA_THRESHOLD)
      return this.getWindowClusters(knex, {
        xMin,
        xMax,
        yMin,
        yMax,
        componentId,
      });

    return this.getWindowDetail(knex, {
      xMin,
      xMax,
      yMin,
      yMax,
      componentId,
      maxNodes,
    });
  }

  private async getWindowClusters(
    knex: ReturnType<EntityManager['getKnex']>,
    {
      xMin,
      xMax,
      yMin,
      yMax,
      componentId,
    }: {
      xMin: number;
      xMax: number;
      yMin: number;
      yMax: number;
      componentId?: number;
    },
  ): Promise<Types.GetWindowResponse> {
    const { rows } = await knex.raw<{ rows: ClusterRow[] }>(
      `
      SELECT
        community_id,
        component_id,
        AVG(x)::float8 AS centroid_x,
        AVG(y)::float8 AS centroid_y,
        MIN(x)::float8 AS x_min,
        MAX(x)::float8 AS x_max,
        MIN(y)::float8 AS y_min,
        MAX(y)::float8 AS y_max,
        COUNT(*)::int  AS node_count
      FROM issue_layouts
      WHERE x BETWEEN ? AND ?
        AND y BETWEEN ? AND ?
        ${componentId !== undefined ? 'AND component_id = ?' : ''}
      GROUP BY community_id, component_id
      `,
      componentId !== undefined
        ? [xMin, xMax, yMin, yMax, componentId]
        : [xMin, xMax, yMin, yMax],
    );

    const nodes: Types.ClusterNode[] = rows.map((row) => ({
      kind: 'cluster',
      communityId: row.community_id,
      componentId: row.component_id,
      position: { x: row.centroid_x, y: row.centroid_y },
      bbox: {
        xMin: row.x_min,
        xMax: row.x_max,
        yMin: row.y_min,
        yMax: row.y_max,
      },
      nodeCount: row.node_count,
    }));

    return {
      lodLevel: 'cluster',
      nodes,
      edges: [],
      meta: {
        truncated: false,
        totalInWindow: nodes.reduce((sum, n) => sum + n.nodeCount, 0),
      },
    };
  }

  private async getWindowDetail(
    knex: ReturnType<EntityManager['getKnex']>,
    {
      xMin,
      xMax,
      yMin,
      yMax,
      componentId,
      maxNodes,
    }: {
      xMin: number;
      xMax: number;
      yMin: number;
      yMax: number;
      componentId?: number;
      maxNodes: number;
    },
  ): Promise<Types.GetWindowResponse> {
    const componentClause =
      componentId !== undefined ? 'AND il.component_id = ?' : '';

    const baseParams = [xMin, xMax, yMin, yMax];
    const detailParams =
      componentId !== undefined
        ? [...baseParams, componentId, maxNodes + 1]
        : [...baseParams, maxNodes + 1];

    const { rows } = await knex.raw<{ rows: DetailRow[] }>(
      `
      SELECT
        i.uuid,
        il.x,
        il.y,
        il.community_id,
        il.component_id,
        i.title,
        i.published_at,
        (
          SELECT c.url
          FROM issue_contributors ic
          JOIN covers c ON c.uuid = ic.cover_uuid
          WHERE ic.issue_uuid = i.uuid
            AND c.url IS NOT NULL
          ORDER BY c.is_variant ASC
          LIMIT 1
        ) AS cover_url
      FROM issue_layouts il
      JOIN issues i ON i.uuid = il.issue_uuid AND i.deleted_at IS NULL
      WHERE il.x BETWEEN ? AND ?
        AND il.y BETWEEN ? AND ?
        ${componentClause}
      ORDER BY il.community_id, il.x, il.y
      LIMIT ?
      `,
      detailParams,
    );

    const truncated = rows.length > maxNodes;
    const trimmed = truncated ? rows.slice(0, maxNodes) : rows;
    const uuidArray = trimmed.map((r) => r.uuid);

    const nodes: Types.DetailNode[] = trimmed.map((row) => ({
      kind: 'detail',
      uuid: row.uuid,
      position: { x: row.x, y: row.y },
      communityId: row.community_id,
      componentId: row.component_id,
      data: {
        title: row.title,
        publishedAt: row.published_at,
        coverUrl: row.cover_url,
      },
    }));

    let edges: Types.GraphEdge[] = [];
    if (uuidArray.length > 0) {
      const { rows: edgeRows } = await knex.raw<{ rows: EdgeRow[] }>(
        `
        SELECT DISTINCT re.from_uuid AS "fromUuid", re.to_uuid AS "toUuid"
        FROM reading_edges re
        WHERE re.from_uuid = ANY(?)
          AND re.to_uuid   = ANY(?)
        `,
        [uuidArray, uuidArray],
      );
      edges = edgeRows.map((row) => ({
        uuid: `${row.fromUuid}-${row.toUuid}`,
        source: row.fromUuid,
        target: row.toUuid,
      }));
    }

    return {
      lodLevel: 'detail',
      nodes,
      edges,
      meta: {
        truncated,
        totalInWindow: trimmed.length,
      },
    };
  }
}
