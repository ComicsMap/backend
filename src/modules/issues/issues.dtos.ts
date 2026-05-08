import * as Schemas from '@modules/issues/issues.schemas';
import { createZodDto } from 'nestjs-zod';

/** List Issues DTOs */

export class ListIssuesQuery extends createZodDto(
  Schemas.listIssuesQuerySchema.transform((data) => ({
    filters: {
      keyword: data.keyword,
      publishers: data.publisher,
      barcodes: data.barcode,
    },
    pagination: {
      offset: data.offset,
      limit: data.limit,
    },
  })),
) {}
export class ListIssuesResponse extends createZodDto(
  Schemas.listIssuesResponseSchema,
) {}

/** Create Issue DTOs */

export class CreateIssueBody extends createZodDto(
  Schemas.createIssueBodySchema,
) {}
export class CreateIssueResponse extends createZodDto(
  Schemas.createIssueResponseSchema,
) {}

/** Retrieve Issue DTOs */

export class RetrieveIssueParams extends createZodDto(
  Schemas.retrieveIssueParamsSchema,
) {}
export class RetrieveIssueResponse extends createZodDto(
  Schemas.retrieveIssueResponseSchema,
) {}

/** Partial Update Issue DTOs */

export class PartialUpdateIssueParams extends createZodDto(
  Schemas.partialUpdateIssueParamsSchema,
) {}
export class PartialUpdateIssueBody extends createZodDto(
  Schemas.partialUpdateIssueBodySchema,
) {}
export class PartialUpdateIssueResponse extends createZodDto(
  Schemas.partialUpdateIssueResponseSchema,
) {}

/** Delete Issue DTOs */

export class DeleteIssueParams extends createZodDto(
  Schemas.deleteIssueParamsSchema,
) {}
export class DeleteIssueQuery extends createZodDto(
  Schemas.deleteIssueQuerySchema,
) {}
