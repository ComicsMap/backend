import { AuditableEntity } from '@entities/auditable.entity';
import { Issue } from '@entities/issues/issue.entity';
import {
  Collection,
  Entity,
  OneToMany,
  type Opt,
  Property,
} from '@mikro-orm/core';

export const TITLE_MAX_LENGTH = 255;

@Entity({
  tableName: 'series',
})
export class Series extends AuditableEntity {
  @Property({
    name: 'title',
    type: 'varchar',
    length: TITLE_MAX_LENGTH,
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

  public static formatDisplayTitle(title: string, startYear?: number): string {
    return startYear ? `${title} (${startYear})` : title;
  }
}
