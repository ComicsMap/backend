import { User } from '@entities/users/user.entity';

declare module 'express' {
  interface Request {
    user: Optional<User>;
  }
}
