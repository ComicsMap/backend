import { createUserBodySchema } from '@modules/users/users.schemas';
import { z } from 'zod';

export type CreateUserData = z.infer<typeof createUserBodySchema>;
