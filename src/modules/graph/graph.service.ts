import { Issue } from '@entities/index';
import { Cover } from '@entities/issues/cover.entity';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import * as Types from '@modules/graph/graph.types';
import { Injectable, NotFoundException } from '@nestjs/common';

const MAX_DEPTH = 10;
const MAX_NODES = 200;

interface SubgraphRow {
  uuid: string;
  depth: number;
  degree: number;
}

interface SubgraphEdgeRow {
  fromUuid: string;
  toUuid: string;
}

@Injectable()
export class GraphService {
  constructor(
    private readonly em: EntityManager,
    @InjectRepository(Issue)
    private readonly issueRepository: EntityRepository<Issue>,
  ) {}

  async getSubgraph(
    issueUuid: string,
    depth: number,
  ): Promise<Types.GetSubgraphResponse> {
    const rootIssue = await this.issueRepository.findOne({
      uuid: issueUuid,
    });
    if (!rootIssue)
      throw new NotFoundException(`Issue with UUID ${issueUuid} not found`);

    const safeDepth = Math.min(depth, MAX_DEPTH);

    const knex = this.em.getKnex();

    const { rows: nodeRows } = await knex.raw<{ rows: SubgraphRow[] }>(
      `
      WITH RECURSIVE subgraph(uuid, depth) AS (
        SELECT ?::uuid, 0

        UNION

        SELECT
          CASE
            WHEN re.from_uuid = sg.uuid THEN re.to_uuid
            ELSE re.from_uuid
          END,
          sg.depth + 1
        FROM subgraph sg
        JOIN reading_edges re
          ON re.from_uuid = sg.uuid OR re.to_uuid = sg.uuid
        JOIN issues i
          ON i.uuid = CASE
            WHEN re.from_uuid = sg.uuid THEN re.to_uuid
            ELSE re.from_uuid
          END
        WHERE sg.depth < ?
          AND i.deleted_at IS NULL
      ),
      deduped AS (
        SELECT uuid, MIN(depth) AS depth
        FROM subgraph
        GROUP BY uuid
      )
      SELECT
        d.uuid,
        d.depth,
        COUNT(re.from_uuid)::int AS degree
      FROM deduped d
      LEFT JOIN reading_edges re
        ON re.from_uuid = d.uuid OR re.to_uuid = d.uuid
      GROUP BY d.uuid, d.depth
      ORDER BY d.depth ASC, degree DESC
      LIMIT ?
      `,
      [rootIssue.uuid, safeDepth, MAX_NODES + 1],
    );

    const hasMore = nodeRows.length > MAX_NODES;
    const trimmedRows = nodeRows.slice(0, MAX_NODES);

    const visitedUuids = new Set(trimmedRows.map((r) => r.uuid));
    const depthMap = new Map(trimmedRows.map((r) => [r.uuid, r.depth]));
    const degreeMap = new Map(trimmedRows.map((r) => [r.uuid, r.degree]));

    const uuidArray = [...visitedUuids];
    const { rows: edgeRows } = await knex.raw<{ rows: SubgraphEdgeRow[] }>(
      `
      SELECT DISTINCT re.from_uuid AS "fromUuid", re.to_uuid AS "toUuid"
      FROM reading_edges re
      WHERE re.from_uuid = ANY(?)
        AND re.to_uuid   = ANY(?)
      `,
      [uuidArray, uuidArray],
    );

    const issues = await this.issueRepository.find(
      { uuid: { $in: [...visitedUuids] } },
      { populate: ['contributors', 'contributors.cover'] },
    );

    const nodes: Types.GraphNode[] = issues.map((issue) => ({
      uuid: issue.uuid,
      data: {
        uuid: issue.uuid,
        title: issue.title,
        publishedAt: issue.publishedAt,
        coverUrl:
          (
            issue.contributors.getItems().find((contributor) => {
              const cover = contributor.cover as unknown as Optional<Cover>;
              return cover?.url && !cover?.isVariant;
            })?.cover as unknown as Optional<Cover>
          )?.url || null,
        isRoot: issue.uuid === rootIssue.uuid,
        depth: depthMap.get(issue.uuid) ?? 0,
        degree: degreeMap.get(issue.uuid) ?? 0,
      },
    }));

    const edges: Types.GraphEdge[] = edgeRows.map((row) => ({
      uuid: `${row.fromUuid}-${row.toUuid}`,
      source: row.fromUuid,
      target: row.toUuid,
    }));

    return {
      nodes,
      edges,
      meta: {
        hasMore,
        totalNodes: nodeRows.length,
        depthReached: safeDepth,
        rootUuid: rootIssue.uuid,
      },
    };
  }
}
