import { User } from '@entities/user.entity';
import { AsyncLocalStorage } from 'node:async_hooks';

interface AuditContextStore {
  user: Optional<User>;
}

const storage = new AsyncLocalStorage<AuditContextStore>();

export const AuditContext = {
  run<T>(user: Optional<User>, fn: () => T): T {
    return storage.run({ user }, fn);
  },

  getUser(): Optional<User> {
    return storage.getStore()?.user;
  },
};
