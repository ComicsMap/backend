import { Issue } from '@entities/issues/issue.entity';
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
  tableName: 'series',
})
@Filter({
  name: 'notDeleted',
  cond: { deletedAt: null },
  default: true,
})
export class Series {
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
    name: 'start_year',
    columnType: 'smallint',
    nullable: true,
  })
  startYear?: number;

  @Property({
    persist: false,
  })
  get displayTitle(): Opt<string> {
    return Series.formatDisplayTitle(this.title, this.startYear);
  }

  @OneToMany(() => Issue, (issue) => issue.series)
  readonly issues = new Collection<Issue>(this);

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

  public static formatDisplayTitle(title: string, startYear?: number): string {
    return startYear ? `${title} (${startYear})` : title;
  }
}
