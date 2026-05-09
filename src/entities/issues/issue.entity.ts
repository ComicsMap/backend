import { IssueLayout } from '@entities/issue-layout.entity';
import { IssueContributor } from '@entities/issues/issue-contributor.entity';
import {
  Collection,
  Entity,
  Enum,
  Filter,
  Index,
  OneToMany,
  OneToOne,
  type Opt,
  PrimaryKey,
  Property,
  type Ref,
} from '@mikro-orm/core';

export enum Publisher {
  Marvel = 'MARVEL',
  DC = 'DC',
}

@Entity({
  tableName: 'issues',
})
@Index({
  name: 'idx_issues_publisher',
  properties: ['publisher'],
})
@Index({
  name: 'idx_issues_published_at',
  properties: ['publishedAt'],
})
@Filter({
  name: 'notDeleted',
  cond: { deletedAt: null },
  default: true,
})
export class Issue {
  @PrimaryKey({
    name: 'uuid',
    type: 'uuid',
    defaultRaw: 'gen_random_uuid()',
  })
  readonly uuid: string = crypto.randomUUID();

  @Property({
    name: 'title',
    columnType: 'varchar(255)',
    nullable: false,
  })
  title!: string;

  @Property({
    name: 'synopsis',
    columnType: 'text',
    nullable: true,
  })
  synopsis?: string;

  @Enum({
    name: 'publisher',
    items: () => Publisher,
    nativeEnumName: 'publisher',
    nullable: false,
  })
  publisher!: Publisher;

  @OneToMany(() => IssueContributor, (contributor) => contributor.issue)
  readonly contributors = new Collection<IssueContributor>(this);

  @OneToOne(() => IssueLayout, (layout) => layout.issue, {
    nullable: true,
    ref: true,
  })
  layout?: Ref<IssueLayout>;

  @Property({
    name: 'published_at',
    type: 'timestamp with time zone',
    nullable: false,
  })
  publishedAt!: Date;

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
