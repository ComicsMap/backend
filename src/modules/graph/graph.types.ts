export interface GraphEdge {
  uuid: string;
  source: string;
  target: string;
}

export type LodLevel = 'cluster' | 'detail';

export interface DetailNode {
  kind: 'detail';
  uuid: string;
  position: { x: number; y: number };
  communityId: number;
  componentId: number;
  seriesUuid: Nullable<string>;
  seriesDisplayTitle: Nullable<string>;
  data: {
    title: string;
    publishedAt: Date;
    coverUrl: Nullable<string>;
  };
}

export interface GraphBounds {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
}

export interface GetMetaResponse {
  bounds: GraphBounds;
}

export interface ClusterNode {
  kind: 'cluster';
  communityId: number;
  componentId: number;
  position: { x: number; y: number };
  bbox: { xMin: number; xMax: number; yMin: number; yMax: number };
  nodeCount: number;
}

export interface GetWindowResponse {
  lodLevel: LodLevel;
  nodes: Array<DetailNode | ClusterNode>;
  edges: GraphEdge[];
  meta: {
    truncated: boolean;
    totalInWindow: number;
  };
}
