import { GetWindowQuery } from '@comics-map/shared/types';

export type WindowParams = Omit<GetWindowQuery, 'zoom'>;

export interface DetailRow {
  uuid: string;
  x: number;
  y: number;
  communityId: number;
  componentId: number;
  title: string;
  publishedAt: string;
  coverUrl: Nullable<string>;
  seriesUuid: Nullable<string>;
  seriesTitle: Nullable<string>;
  seriesStartYear: Nullable<number>;
}

export interface ClusterRow {
  communityId: number;
  componentId: number;
  centroidX: number;
  centroidY: number;
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  nodeCount: number;
}

export interface EdgeRow {
  fromUuid: string;
  toUuid: string;
}

export interface BoundsRow {
  xMin: Nullable<number>;
  xMax: Nullable<number>;
  yMin: Nullable<number>;
  yMax: Nullable<number>;
}
