import { IssueContributor } from '@entities/issues/issue-contributor.entity';
import {
  Collection,
  Entity,
  Index,
  OneToMany,
  type Opt,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';

@Entity({
  tableName: 'covers',
})
@Index({
  name: 'idx_covers_is_variant',
  properties: ['isVariant'],
})
export class Cover {
  @PrimaryKey({
    name: 'uuid',
    type: 'uuid',
    defaultRaw: 'gen_random_uuid()',
  })
  readonly uuid: string = crypto.randomUUID();

  @Property({
    name: 'url',
    columnType: 'varchar(512)',
    nullable: false,
  })
  url!: string;

  @Property({
    name: 'is_variant',
    type: 'boolean',
    nullable: false,
    defaultRaw: 'false',
    onCreate: () => false,
  })
  isVariant!: boolean;

  @OneToMany(() => IssueContributor, (contributor) => contributor.cover)
  contributors = new Collection<IssueContributor>(this);

  @Property({
    name: 'barcodes',
    columnType: 'varchar[]',
    nullable: false,
    defaultRaw: "'{}'",
  })
  barcodes: Opt<string[]> = [];

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
