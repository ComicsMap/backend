import { IssueContributor } from '@entities/issues/issue-contributor.entity';
import {
  BeforeCreate,
  BeforeUpdate,
  Check,
  Collection,
  Entity,
  Filter,
  OneToMany,
  type Opt,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';

@Entity({
  tableName: 'people',
})
@Filter({
  name: 'notDeleted',
  cond: { deletedAt: null },
  default: true,
})
@Check({
  name: 'people_identity_check',
  expression:
    'pseudonym IS NOT NULL OR (first_name IS NOT NULL AND last_name IS NOT NULL)',
})
export class Person {
  @PrimaryKey({
    name: 'uuid',
    type: 'uuid',
    defaultRaw: 'gen_random_uuid()',
  })
  readonly uuid: string = crypto.randomUUID();

  @Property({
    name: 'first_name',
    columnType: 'varchar(32)',
    nullable: true,
  })
  firstName?: Opt<string>;

  @Property({
    name: 'last_name',
    columnType: 'varchar(32)',
    nullable: true,
  })
  lastName?: Opt<string>;

  @Property({
    name: 'pseudonym',
    columnType: 'varchar(32)',
    nullable: true,
  })
  pseudonym?: Opt<string>;

  @Property({ persist: false })
  get displayName(): Opt<string> {
    return Person.formatDisplayName(
      this.firstName,
      this.lastName,
      this.pseudonym,
    ) as string;
  }

  @OneToMany(() => IssueContributor, (contribution) => contribution.person)
  readonly contributions = new Collection<IssueContributor>(this);

  @Property({
    name: 'created_at',
    type: 'timestamp with time zone',
    nullable: false,
    defaultRaw: 'now()',
  })
  readonly createdAt: Opt<Date> = new Date();

  @Property({
    name: 'updated_at',
    type: 'timestamp with time zone',
    nullable: false,
    defaultRaw: 'now()',
    onUpdate: () => new Date(),
  })
  updatedAt: Opt<Date> = new Date();

  @Property({
    name: 'deleted_at',
    type: 'timestamp with time zone',
    nullable: true,
  })
  deletedAt?: Date;

  @BeforeCreate()
  @BeforeUpdate()
  validateIdentity() {
    if (!this.pseudonym && (!this.firstName || !this.lastName)) {
      throw new Error(
        'A person must have either a pseudonym or both a first name and a last name.',
      );
    }
  }

  public static formatDisplayName(
    firstName?: string,
    lastName?: string,
    pseudonym?: string,
  ): Nullable<string> {
    if (pseudonym) return pseudonym;
    const fullName = [firstName, lastName].filter(Boolean).join(' ');
    return fullName || null;
  }
}
