import * as Schemas from '@modules/users/users.schemas';
import { createZodDto } from 'nestjs-zod';

export class CreateUserBody extends createZodDto(
  Schemas.createUserBodySchema,
) {}
export class CreateUserResponse extends createZodDto(
  Schemas.createUserResponseSchema,
) {}
