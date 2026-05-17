import {
  createSessionDataSchema,
  createSessionResponseSchema,
  retrieveSessionResponseSchema,
} from '@comics-map/shared/schemas';
import { createZodDto } from 'nestjs-zod';

export class CreateSessionData extends createZodDto(createSessionDataSchema) {}
export class CreateSessionResponse extends createZodDto(
  createSessionResponseSchema,
) {}

export class RetrieveSessionResponse extends createZodDto(
  retrieveSessionResponseSchema,
) {}
