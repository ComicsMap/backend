import { wrap } from '@mikro-orm/core';
import { AUTH_COOKIE_NAME } from '@modules/sessions/sessions.constants';
import { Injectable } from '@nestjs/common';
import type { Request, Response } from 'express';

@Injectable()
export class SessionsService {
  public create(req: Request, rememberMe: boolean = false) {
    return new Promise((resolve, reject) => {
      req.login(req.user!, (error: Error) => {
        if (error) return reject(error);

        if (rememberMe) {
          req.session.cookie.maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days
        } else {
          req.session.cookie.maxAge = 24 * 60 * 60 * 1000; // 1 day
        }

        resolve(wrap(req.user!).toObject());
      });
    });
  }

  public delete(req: Request, res: Response) {
    return new Promise<void>((resolve, reject) => {
      req.logout((error: Error) => {
        if (error) return reject(error);

        req.session.destroy((error: Error) => {
          if (error) return reject(error);

          res.clearCookie(AUTH_COOKIE_NAME);
          resolve();
        });
      });
    });
  }
}
