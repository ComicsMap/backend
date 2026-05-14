import { AuditContext } from '@modules/audit/audit-context';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import type { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuditContextInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<unknown>,
  ): Observable<unknown> {
    const request: Request = context.switchToHttp().getRequest();
    return new Observable((subscriber) => {
      AuditContext.run(request.user, () => {
        next.handle().subscribe(subscriber);
      });
    });
  }
}
