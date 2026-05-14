import * as Schemas from '@modules/sessions/sessions.schemas';
import { createZodDto } from 'nestjs-zod';

export class CreateSessionBody extends createZodDto(
  Schemas.createSessionBodySchema,
) {}
export class CreateSessionResponse extends createZodDto(
  Schemas.createSessionResponseSchema,
) {}
