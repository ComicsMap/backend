import { z } from 'zod';

export const configSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),

  POSTGRES_HOST: z.string().nonempty(),
  POSTGRES_PORT: z.coerce.number().default(5432),
  POSTGRES_USER: z.string().nonempty(),
  POSTGRES_PASSWORD: z.string().nonempty(),
  POSTGRES_DB: z.string().nonempty(),
});
