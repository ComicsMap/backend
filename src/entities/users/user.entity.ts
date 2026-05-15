import {
  Entity,
  Filter,
  Index,
  type Opt,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';

export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 64;
export const DISPLAY_NAME_MAX_LENGTH = 64;
export const USERNAME_REGEX = /^[a-zA-Z0-9._\-']+$/;

export const EMAIL_MAX_LENGTH = 320;

@Entity({
  tableName: 'users',
})
@Index({
  name: 'idx_users_username',
  properties: ['username'],
})
@Index({
  name: 'idx_users_display_name',
  properties: ['displayName'],
})
@Index({
  name: 'idx_users_email',
  properties: ['email'],
})
@Filter({
  name: 'notDeleted',
  cond: { deletedAt: null },
  default: true,
})
export class User {
  @PrimaryKey({
    name: 'uuid',
    type: 'uuid',
    defaultRaw: 'gen_random_uuid()',
  })
  readonly uuid: string = crypto.randomUUID();

  @Property({
    name: 'username',
    type: 'varchar',
    length: USERNAME_MAX_LENGTH,
    nullable: false,
    unique: true,
  })
  username!: string;

  @Property({
    name: 'display_name',
    type: 'varchar',
    length: DISPLAY_NAME_MAX_LENGTH,
    nullable: true,
  })
  displayName?: Opt<string>;

  @Property({
    name: 'email',
    type: 'varchar',
    length: EMAIL_MAX_LENGTH,
    nullable: false,
    unique: true,
  })
  email!: string;

  @Property({ name: 'password', type: 'varchar', nullable: false })
  password!: string;

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
