import { AuditableEntity } from '@entities/auditable.entity';
import { EventArgs, EventSubscriber, Reference } from '@mikro-orm/core';
import { AuditContext } from '@modules/audit/audit-context';

export class AuditSubscriber implements EventSubscriber<AuditableEntity> {
  getSubscribedEntities() {
    return [];
  }

  beforeCreate(args: EventArgs<AuditableEntity>): void {
    if (!(args.entity instanceof AuditableEntity)) return;
    const user = AuditContext.getUser();
    if (!user) return;
    if (!args.entity.createdBy) args.entity.createdBy = Reference.create(user);
    if (!args.entity.updatedBy) args.entity.updatedBy = Reference.create(user);
  }

  beforeUpdate(args: EventArgs<AuditableEntity>): void {
    if (!(args.entity instanceof AuditableEntity)) return;
    const user = AuditContext.getUser();
    if (!user) return;

    const payload = args.changeSet?.payload;
    const isSoftDelete =
      payload !== undefined &&
      'deletedAt' in payload &&
      payload.deletedAt !== null &&
      payload.deletedAt !== undefined;

    if (isSoftDelete) {
      args.entity.deletedBy = Reference.create(user);
    } else {
      args.entity.updatedBy = Reference.create(user);
    }
  }
}
