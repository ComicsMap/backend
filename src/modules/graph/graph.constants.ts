export const NODE_SIZE = 10;
export const NODE_SPACING = 10;
export const LAYER_SPACING = 10;
export const COMPONENT_SPACING = 20;

export const ELK_LAYOUT_OPTIONS = {
  'elk.algorithm': 'layered',
  'elk.direction': 'RIGHT',
  'elk.layered.spacing.nodeNodeBetweenLayers': String(LAYER_SPACING),
  'elk.spacing.nodeNode': String(NODE_SPACING),
  'elk.spacing.componentComponent': String(COMPONENT_SPACING),
  'elk.separateConnectedComponents': 'true',
};

export const CLUSTER_LOD_AREA_RATIO = 0.75;
