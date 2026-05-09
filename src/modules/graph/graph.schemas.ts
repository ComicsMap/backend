import { z } from 'zod';

export const getWindowQuerySchema = z.object({
  xMin: z.coerce.number().describe('Fetch bbox min x'),
  xMax: z.coerce.number().describe('Fetch bbox max x'),
  yMin: z.coerce.number().describe('Fetch bbox min y'),
  yMax: z.coerce.number().describe('Fetch bbox max y'),
  visibleXMin: z.coerce
    .number()
    .optional()
    .describe('Visible viewport min x (used for LOD; defaults to xMin)'),
  visibleXMax: z.coerce
    .number()
    .optional()
    .describe('Visible viewport max x (used for LOD; defaults to xMax)'),
  visibleYMin: z.coerce
    .number()
    .optional()
    .describe('Visible viewport min y (used for LOD; defaults to yMin)'),
  visibleYMax: z.coerce
    .number()
    .optional()
    .describe('Visible viewport max y (used for LOD; defaults to yMax)'),
  zoom: z.coerce
    .number()
    .optional()
    .describe('Current zoom level (informational, not used server-side)'),
  componentId: z.coerce
    .number()
    .int()
    .optional()
    .describe('Restrict to a single connected component'),
  maxNodes: z.coerce
    .number()
    .int()
    .min(1)
    .max(2000)
    .default(500)
    .describe('Maximum nodes returned in detail mode'),
});
