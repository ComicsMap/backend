export interface GetSubgraphResponse {
  nodes: GraphNode[];
  edges: GraphEdge[];
  meta: {
    hasMore: boolean;
    totalNodes: number;
    depthReached: number;
    rootUuid: string;
  };
}

export interface GraphNode {
  uuid: string;
  data: GraphNodeData;
}

export interface GraphNodeData {
  title: string;
  publishedAt: Date;
  coverUrl: Nullable<string>;
  isRoot: boolean;
  depth: number;
  degree: number;
}

export interface GraphEdge {
  uuid: string;
  source: string;
  target: string;
}
