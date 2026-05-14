import { serializedUserSchema } from '@modules/users/users.schemas';
import { z } from 'zod';

export const createSessionBodySchema = z.object({
  login: z.string().nonempty().describe('The username or email of the user'),
  password: z.string().nonempty().describe('The password of the user'),
  rememberMe: z
    .boolean()
    .optional()
    .describe('Whether to keep the user signed in for a longer period'),
});
export const createSessionResponseSchema = serializedUserSchema;
