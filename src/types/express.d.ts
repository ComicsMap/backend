import { User } from '@comics-map/shared';

declare module 'express' {
  interface Request {
    user: Optional<User>;
  }
}
