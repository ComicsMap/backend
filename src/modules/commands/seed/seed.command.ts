import { seedContributors } from '@commands/seed/contributors';
import { seedCovers } from '@commands/seed/covers';
import { seedIssues } from '@commands/seed/issues';
import { seedPeople } from '@commands/seed/people';
import { seedReadingEdges } from '@commands/seed/reading-edges';
import { seedSeries } from '@commands/seed/series';
import { EntityManager } from '@mikro-orm/postgresql';
import { Command, CommandRunner, Option } from 'nest-commander';

interface SeedCommandOptions {
  fresh?: boolean;
}

@Command({
  name: 'seed',
  description: 'Seed the database with initial data',
})
export class SeedCommand extends CommandRunner {
  constructor(private readonly em: EntityManager) {
    super();
  }

  @Option({
    flags: '-f, --fresh',
    description: 'Drop all data before seeding',
    defaultValue: false,
  })
  parseFresh(): boolean {
    return true;
  }

  async run(_params: string[], options?: SeedCommandOptions): Promise<void> {
    const em = this.em.fork();

    if (options?.fresh) {
      await em
        .getConnection()
        .execute(
          'TRUNCATE TABLE "people", "issues", "covers" RESTART IDENTITY CASCADE',
        );
    }

    const people = seedPeople(em);
    const series = seedSeries(em);
    const issues = seedIssues(em, series);
    const covers = seedCovers(em);
    seedContributors(em, people, issues, covers);
    seedReadingEdges(em, issues);

    await em.flush();
  }
}
