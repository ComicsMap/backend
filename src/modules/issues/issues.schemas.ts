import * as Entities from '@entities/index';
import { z } from 'zod';

const populatedPersonSchema = z.object({
  uuid: z.uuid(),
  displayName: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
});

const populatedCoverSchema = z.object({
  uuid: z.uuid(),
  url: z.url(),
  isVariant: z.boolean(),
  barcodes: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
});

const populatedContributorSchema = z.object({
  uuid: z.uuid(),
  issue: z.uuid(),
  person: z.union([z.uuid(), populatedPersonSchema]),
  cover: z.union([z.uuid(), populatedCoverSchema]).nullish(),
  role: z.enum(Entities.ContributorRole),
});

export const issueSchema = z.object({
  uuid: z.uuid().describe('UUID of the issue'),
  title: z.string().describe('Title of the issue'),
  synopsis: z.string().nullish().describe('Synopsis of the issue'),
  publisher: z.enum(Entities.Publisher).describe('Publisher of the issue'),
  publishedAt: z.date().describe('Publication date of the issue'),
  createdAt: z.date().describe('Creation timestamp of the issue'),
  updatedAt: z.date().describe('Last update timestamp of the issue'),
  deletedAt: z.date().nullish().describe('Deletion timestamp of the issue'),
  contributors: z.array(
    z.union([
      z.uuid().describe('UUID of the contributor'),
      populatedContributorSchema,
    ]),
  ),
  layout: z
    .union([
      z.uuid(),
      z.object({
        x: z.number(),
        y: z.number(),
        communityId: z.number().int(),
        componentId: z.number().int(),
      }),
    ])
    .nullish()
    .describe('Layout entry in the global graph (null if not laid out yet)'),
});

export const serializedIssueSchema = issueSchema.transform((data) => {
  const populatedContributors = data.contributors.filter(
    (c): c is z.infer<typeof populatedContributorSchema> =>
      typeof c !== 'string',
  );

  const coversByUuid = new Map<
    string,
    {
      uuid: string;
      url: string;
      isVariant: boolean;
      barcodes: string[];
      contributors: string[];
    }
  >();

  for (const contributor of populatedContributors) {
    if (!contributor.cover || typeof contributor.cover === 'string') continue;
    const cover = contributor.cover;
    const existing = coversByUuid.get(cover.uuid);
    if (existing) {
      existing.contributors.push(contributor.uuid);
    } else {
      coversByUuid.set(cover.uuid, {
        uuid: cover.uuid,
        url: cover.url,
        isVariant: cover.isVariant,
        barcodes: cover.barcodes,
        contributors: [contributor.uuid],
      });
    }
  }

  const position =
    data.layout && typeof data.layout !== 'string'
      ? { x: data.layout.x, y: data.layout.y }
      : null;

  return {
    uuid: data.uuid,
    title: data.title,
    synopsis: data.synopsis,
    publisher: data.publisher,
    publishedAt: data.publishedAt,
    position,
    contributors: data.contributors.map((contributor) =>
      typeof contributor === 'string'
        ? contributor
        : {
            uuid: contributor.uuid,
            person:
              typeof contributor.person === 'string'
                ? contributor.person
                : {
                    uuid: contributor.person.uuid,
                    displayName: contributor.person.displayName,
                  },
            role: contributor.role,
          },
    ),
    covers: Array.from(coversByUuid.values()).sort((a, b) => {
      if (a.isVariant === b.isVariant) return 0;
      return a.isVariant ? 1 : -1;
    }),
  };
});

/** List Issues Schemas */

export const listIssuesQuerySchema = z.object({
  keyword: z
    .string()
    .optional()
    .describe('Keyword to search in issue titles and authors'),
  publisher: z
    .union([z.enum(Entities.Publisher), z.array(z.enum(Entities.Publisher))])
    .optional()
    .transform(
      (value) =>
        (Array.isArray(value) ? value : [value]).filter(
          Boolean,
        ) as Entities.Publisher[],
    )
    .describe('Filter issues by publisher'),
  barcode: z
    .union([z.string(), z.array(z.string())])
    .optional()
    .transform(
      (value) =>
        (Array.isArray(value) ? value : [value]).filter(Boolean) as string[],
    )
    .describe('Filter issues by barcode'),
  offset: z.coerce
    .number()
    .int()
    .min(0)
    .default(0)
    .describe('Number of items to skip'),
  limit: z.coerce
    .number()
    .int()
    .min(1)
    .default(20)
    .describe('Maximum number of items to return'),
});
export const listIssuesResponseSchema = z.object({
  results: z
    .array(serializedIssueSchema)
    .describe('List of issues matching the query'),
  total: z.number().describe('Total number of issues matching the query'),
  offset: z.number().describe('Number of items skipped'),
  limit: z.number().describe('Maximum number of items returned'),
});

/** Create Issue Schemas */

export const createIssueBodySchema = z.object({
  title: z.string().describe('Title of the issue'),
  synopsis: z.string().nullish().describe('Synopsis of the issue'),
  publisher: z.enum(Entities.Publisher).describe('Publisher of the issue'),
  publishedAt: z.iso.datetime().describe('Publication date of the issue'),
  series: z.uuid().describe('UUID of the series the issue belongs to'),
});
export const createIssueResponseSchema =
  serializedIssueSchema.describe('The created issue');

/** Retrieve Issue Schemas */

export const retrieveIssueParamsSchema = z.object({
  uuid: z.uuid().describe('UUID of the issue to retrieve'),
});
export const retrieveIssueResponseSchema = serializedIssueSchema.describe(
  'The retrieved issue',
);

/** Partial Update Issue Schemas */

export const partialUpdateIssueParamsSchema = z.object({
  uuid: z.uuid().describe('UUID of the issue to update'),
});
export const partialUpdateIssueBodySchema = z.object({
  title: z.string().optional().describe('Title of the issue'),
  synopsis: z.string().nullish().optional().describe('Synopsis of the issue'),
  publisher: z
    .enum(Entities.Publisher)
    .optional()
    .describe('Publisher of the issue'),
  publishedAt: z.iso
    .datetime()
    .optional()
    .describe('Publication date of the issue'),
  contributors: z
    .array(z.uuid())
    .optional()
    .describe('UUIDs of the contributors to the issue'),
});
export const partialUpdateIssueResponseSchema = serializedIssueSchema.describe(
  'The updated issue after the partial update',
);

/** Delete Issue Schemas */

export const deleteIssueParamsSchema = z.object({
  uuid: z.uuid().describe('UUID of the issue to delete'),
});
export const deleteIssueQuerySchema = z.object({
  soft: z
    .enum(['true', 'false'])
    .default('true')
    .transform((value) => value === 'true')
    .describe('Whether to perform a soft delete (default: true)'),
});
