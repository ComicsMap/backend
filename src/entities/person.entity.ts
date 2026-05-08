import { IssueContributor } from '@entities/issues/issue-contributor.entity';
import {
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
export class Person {
  @PrimaryKey({
    name: 'uuid',
    type: 'uuid',
    defaultRaw: 'gen_random_uuid()',
  })
  readonly uuid: string = crypto.randomUUID();

  @Property({
    name: 'display_name',
    columnType: 'varchar(255)',
    nullable: false,
  })
  displayName!: string;

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
}
