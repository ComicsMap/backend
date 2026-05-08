import { Issue } from '@entities/index';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, FilterQuery } from '@mikro-orm/postgresql';
import * as Types from '@modules/issues/issues.types';
import { Injectable, NotFoundException } from '@nestjs/common';

const escapeLike = (value: string): string =>
  value.replace(/[\\%_]/g, (c) => `\\${c}`);

@Injectable()
export class IssuesService {
  constructor(
    @InjectRepository(Issue)
    private readonly issuesRepository: EntityRepository<Issue>,
  ) {}

  public async list(
    filters: Types.ListIssuesFilters = {},
    pagination: {
      offset?: number;
      limit?: number;
    } = {},
  ) {
    const { offset = 0, limit = 20 } = pagination;

    const where: FilterQuery<Issue> = {};

    const trimmed = filters.keyword?.trim();
    if (trimmed)
      where['$or'] = [
        { title: { $ilike: `%${escapeLike(trimmed)}%` } },
        {
          contributors: {
            person: {
              displayName: { $ilike: `%${escapeLike(trimmed)}%` },
            },
          },
        },
      ];
    if (filters.publishers?.length)
      where.publisher = { $in: filters.publishers };
    if (filters.barcodes?.length)
      where.contributors = {
        cover: { barcodes: { $overlap: filters.barcodes } },
      };

    const [results, total] = await this.issuesRepository.findAndCount(where, {
      orderBy: [{ createdAt: 'DESC' }, { uuid: 'ASC' }],
      populate: [
        'contributors',
        'contributors.cover',
        'contributors.cover.contributors:ref',
        'contributors.person',
      ],
      offset,
      limit,
    });

    return { results, total, offset, limit };
  }

  public async create(data: Types.CreateIssuePayload): Promise<Issue> {
    const issue = this.issuesRepository.create(data);

    await this.issuesRepository.getEntityManager().persist(issue).flush();

    return issue;
  }

  public async retrieve(uuid: string): Promise<Issue> {
    const issue = await this.issuesRepository.findOne(
      {
        uuid,
      },
      {
        populate: [
          'contributors',
          'contributors.cover',
          'contributors.cover.contributors:ref',
          'contributors.person',
        ],
      },
    );

    if (!issue)
      throw new NotFoundException(`Issue with UUID ${uuid} not found`);

    return issue;
  }

  public async partialUpdate(
    uuid: string,
    data: Types.PartialUpdateIssuePayload,
  ): Promise<Issue> {
    const issue = await this.issuesRepository.findOne(
      { uuid },
      {
        populate: [
          'contributors',
          'contributors.cover',
          'contributors.cover.contributors:ref',
          'contributors.person',
        ],
      },
    );

    if (!issue)
      throw new NotFoundException(`Issue with uuid ${uuid} not found`);

    this.issuesRepository.assign(issue, data);

    await this.issuesRepository.getEntityManager().flush();

    return issue;
  }

  public async delete(uuid: string, soft: boolean = true): Promise<void> {
    const issue = await this.issuesRepository.findOne({ uuid });

    if (!issue)
      throw new NotFoundException(`Issue with uuid ${uuid} not found`);

    if (soft) {
      issue.deletedAt = new Date();
      await this.issuesRepository.getEntityManager().flush();
    } else {
      const em = this.issuesRepository.getEntityManager();
      em.remove(issue);
      await em.flush();
    }
  }
}
