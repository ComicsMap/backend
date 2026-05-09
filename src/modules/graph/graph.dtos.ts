import * as Schemas from '@modules/graph/graph.schemas';
import { createZodDto } from 'nestjs-zod';

export class GetWindowQuery extends createZodDto(
  Schemas.getWindowQuerySchema,
) {}
