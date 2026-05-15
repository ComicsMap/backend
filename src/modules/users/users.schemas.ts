import {
  USERNAME_MAX_LENGTH,
  USERNAME_MIN_LENGTH,
  USERNAME_REGEX,
} from '@entities/users/user.entity';
import { z } from 'zod';

export const userSchema = z.object({
  uuid: z.uuid(),
  username: z.string().nonempty(),
  email: z.email(),
  password: z.string().nonempty(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
});

export const serializedUserSchema = userSchema.omit({ password: true });

export const createUserBodySchema = z.object({
  username: z
    .string()
    .min(USERNAME_MIN_LENGTH)
    .max(USERNAME_MAX_LENGTH)
    .regex(USERNAME_REGEX, {
      message: 'Username must only contain letters, numbers and underscores',
    })
    .describe('The username of the user'),
  email: z.email().describe('The email of the user'),
  password: z
    .string()
    .min(4)
    .max(72)
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(
      /[^A-Za-z0-9]/,
      'Password must contain at least one special character',
    )
    .describe('The password of the user'),
});
export const createUserResponseSchema = serializedUserSchema;
