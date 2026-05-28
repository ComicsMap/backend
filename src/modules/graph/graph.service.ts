import {
  ClusterNode,
  DetailNode,
  GetMetaResponse,
  GetWindowResponse,
  GraphEdge,
  LodLevel,
} from '@comics-map/shared/types';
import { Series } from '@entities/series.entity';
import { EntityManager } from '@mikro-orm/postgresql';
import { CLUSTER_LOD_AREA_RATIO } from '@modules/graph/graph.constants';
import * as Types from '@modules/graph/graph.types';
import { LayoutBuilderService } from '@modules/graph/layout-builder.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GraphService {
  constructor(
    private readonly em: EntityManager,
    private readonly layoutBuilder: LayoutBuilderService,
  ) {}

  async rebuildLayout(): ReturnType<LayoutBuilderService['rebuild']> {
    return this.layoutBuilder.rebuild();
  }

  async getMeta(): Promise<GetMetaResponse> {
    const knex = this.em.getKnex();
    const { rows } = await knex.raw<{ rows: Types.BoundsRow[] }>(`
      SELECT
        MIN(x)::float8 AS "xMin",
        MAX(x)::float8 AS "xMax",
        MIN(y)::float8 AS "yMin",
        MAX(y)::float8 AS "yMax"
      FROM issue_layouts
    `);

    const row = rows[0];
    return {
      bounds: {
        xMin: row?.xMin ?? 0,
        xMax: row?.xMax ?? 0,
        yMin: row?.yMin ?? 0,
        yMax: row?.yMax ?? 0,
      },
    };
  }

  async getWindow(params: Types.WindowParams): Promise<GetWindowResponse> {
    const knex = this.em.getKnex();
    const { xMin, xMax, yMin, yMax, componentId, maxNodes } = params;

    const visibleXMin = params.visibleXMin ?? xMin;
    const visibleXMax = params.visibleXMax ?? xMax;
    const visibleYMin = params.visibleYMin ?? yMin;
    const visibleYMax = params.visibleYMax ?? yMax;
    const visibleArea =
      Math.max(0, visibleXMax - visibleXMin) *
      Math.max(0, visibleYMax - visibleYMin);

    const { bounds } = await this.getMeta();
    const graphArea =
      Math.max(0, bounds.xMax - bounds.xMin) *
      Math.max(0, bounds.yMax - bounds.yMin);

    const clusterLodEnabled = false;
    if (
      clusterLodEnabled &&
      graphArea > 0 &&
      visibleArea > graphArea * CLUSTER_LOD_AREA_RATIO
    )
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
  ): Promise<GetWindowResponse> {
    const { rows } = await knex.raw<{ rows: Types.ClusterRow[] }>(
      `
      SELECT
        community_id   AS "communityId",
        component_id   AS "componentId",
        AVG(x)::float8 AS "centroidX",
        AVG(y)::float8 AS "centroidY",
        MIN(x)::float8 AS "xMin",
        MAX(x)::float8 AS "xMax",
        MIN(y)::float8 AS "yMin",
        MAX(y)::float8 AS "yMax",
        COUNT(*)::int  AS "nodeCount"
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

    const nodes: ClusterNode[] = rows.map((row) => ({
      kind: LodLevel.Cluster,
      communityId: row.communityId,
      componentId: row.componentId,
      position: { x: row.centroidX, y: row.centroidY },
      bbox: {
        xMin: row.xMin,
        xMax: row.xMax,
        yMin: row.yMin,
        yMax: row.yMax,
      },
      nodeCount: row.nodeCount,
    }));

    return {
      lodLevel: LodLevel.Cluster,
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
  ): Promise<GetWindowResponse> {
    const componentClause =
      componentId !== undefined ? 'AND il.component_id = ?' : '';

    const baseParams = [xMin, xMax, yMin, yMax];
    const detailParams =
      componentId !== undefined
        ? [...baseParams, componentId, maxNodes + 1]
        : [...baseParams, maxNodes + 1];

    const { rows } = await knex.raw<{ rows: Types.DetailRow[] }>(
      `
      SELECT
        i.uuid,
        il.x,
        il.y,
        il.community_id AS "communityId",
        il.component_id AS "componentId",
        i.title,
        i.published_at AS "publishedAt",
        i.series_uuid  AS "seriesUuid",
        s.title        AS "seriesTitle",
        s.start_year     AS "seriesStartYear",
        (
          SELECT c.url
          FROM issue_contributors ic
          JOIN covers c ON c.uuid = ic.cover_uuid
          WHERE ic.issue_uuid = i.uuid
            AND c.url IS NOT NULL
          ORDER BY c.is_variant ASC
          LIMIT 1
        ) AS "coverUrl"
      FROM issue_layouts il
      JOIN issues i ON i.uuid = il.issue_uuid AND i.deleted_at IS NULL
      LEFT JOIN series s ON s.uuid = i.series_uuid AND s.deleted_at IS NULL
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

    const nodes: DetailNode[] = trimmed.map((row) => ({
      kind: LodLevel.Detail,
      uuid: row.uuid,
      position: { x: row.x, y: row.y },
      communityId: row.communityId,
      componentId: row.componentId,
      seriesUuid: row.seriesUuid,
      seriesDisplayTitle: row.seriesTitle
        ? Series.formatDisplayTitle(
            row.seriesTitle,
            row.seriesStartYear as Optional<number>,
          )
        : null,
      data: {
        title: row.title,
        publishedAt: new Date(row.publishedAt),
        coverUrl: row.coverUrl,
      },
    }));

    let edges: GraphEdge[] = [];
    if (uuidArray.length > 0) {
      const { rows: edgeRows } = await knex.raw<{ rows: Types.EdgeRow[] }>(
        `
        SELECT DISTINCT re.from_uuid AS "fromUuid", re.to_uuid AS "toUuid"
        FROM reading_edges re
        WHERE re.from_uuid = ANY(?)
           OR re.to_uuid   = ANY(?)
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
      lodLevel: LodLevel.Detail,
      nodes,
      edges,
      meta: {
        truncated,
        totalInWindow: trimmed.length,
      },
    };
  }
}
