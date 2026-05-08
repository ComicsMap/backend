import { z } from 'zod';

export const getSubgraphQuerySchema = z.object({
  issueUuid: z.uuid().describe('UUID of the issue to start traversal from'),
  depth: z.coerce
    .number()
    .int()
    .min(1)
    .default(3)
    .describe('Maximum traversal depth'),
});
