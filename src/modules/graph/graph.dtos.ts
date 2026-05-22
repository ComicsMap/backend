import {
  getMetaResponseSchema,
  getWindowQuerySchema,
  getWindowResponseSchema,
} from '@comics-map/shared/schemas';
import { createZodDto } from 'nestjs-zod';

/** Get Meta DTOs */

export class GetMetaResponse extends createZodDto(getMetaResponseSchema) {}

/** Get Window DTOs */

export class GetWindowQuery extends createZodDto(getWindowQuerySchema) {}
export class GetWindowResponse extends createZodDto(getWindowResponseSchema) {}
