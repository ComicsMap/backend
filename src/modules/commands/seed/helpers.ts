import {
  ContributorRole,
  Cover,
  Issue,
  IssueContributor,
  Person,
  Publisher,
  ReadingEdge,
  Series,
} from '@comics-map/shared';
import { EntityManager, RequiredEntityData } from '@mikro-orm/postgresql';

export type Em = EntityManager;

export const makePerson = (em: Em) => (data: RequiredEntityData<Person>) =>
  em.create(Person, data);

export const makeSeries = (em: Em) => (data: RequiredEntityData<Series>) =>
  em.create(Series, data);

interface MakeIssueData extends Omit<RequiredEntityData<Issue>, 'publisher'> {
  publisher?: Publisher;
}

export const makeIssue = (em: Em) => (data: MakeIssueData) =>
  em.create(Issue, { publisher: Publisher.Marvel, ...data });

export const makeCover = (em: Em) => (data: RequiredEntityData<Cover>) =>
  em.create(Cover, data);

interface ContributorsSpec {
  writers?: Person[];
  artists?: Person[];
  coverArtists?: { cover: Cover; people: Person[] }[];
}

export const addContributors = (
  em: Em,
  issue: Issue,
  spec: ContributorsSpec,
) => {
  spec.writers?.forEach((person) =>
    em.create(IssueContributor, {
      issue,
      person,
      role: ContributorRole.Writer,
    }),
  );
  spec.artists?.forEach((person) =>
    em.create(IssueContributor, {
      issue,
      person,
      role: ContributorRole.Artist,
    }),
  );
  spec.coverArtists?.forEach(({ cover, people }) =>
    people.forEach((person) =>
      em.create(IssueContributor, {
        issue,
        person,
        role: ContributorRole.CoverArtist,
        cover,
      }),
    ),
  );
};

export const readingChain = (em: Em, ...issues: Issue[]) => {
  for (let i = 0; i < issues.length - 1; i++) {
    em.create(ReadingEdge, { from: issues[i], to: issues[i + 1] });
  }
};

/**
 * @deprecated
 * @param em
 * @param from
 * @param to
 * @returns
 */
export const readingEdge = (em: Em, from: Issue, to: Issue) =>
  em.create(ReadingEdge, { from, to });
