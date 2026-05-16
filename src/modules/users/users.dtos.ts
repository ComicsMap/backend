import {
  createUserDataSchema,
  createUserResponseSchema,
} from '@comics-map/shared';
import { createZodDto } from 'nestjs-zod';

export class CreateUserData extends createZodDto(createUserDataSchema) {}
export class CreateUserResponse extends createZodDto(
  createUserResponseSchema,
) {}
