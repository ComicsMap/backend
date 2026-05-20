import { User } from '@comics-map/shared/entities';

declare module 'express' {
  interface Request {
    user: Optional<User>;
  }
}

declare module 'express-session' {
  interface SessionData {
    oauthRedirect?: string;
  }
}
