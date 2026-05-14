import { AuditContextInterceptor } from '@interceptors/audit-context.interceptor';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { AuditSubscriber } from '@modules/audit/audit.subscriber';
import { CommandsModule } from '@modules/commands/commands.module';
import { ConfigModule } from '@modules/config/config.module';
import { ConfigService } from '@modules/config/config.service';
import { GraphModule } from '@modules/graph/graph.module';
import { IssuesModule } from '@modules/issues/issues.module';
import { RedisModule } from '@modules/redis/redis.module';
import { SessionsModule } from '@modules/sessions/sessions.module';
import { UsersModule } from '@modules/users/users.module';
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ScheduleModule } from '@nestjs/schedule';
import { ZodSerializerInterceptor } from 'nestjs-zod';

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        driver: PostgreSqlDriver,
        host: config.get('POSTGRES_HOST'),
        port: config.get('POSTGRES_PORT'),
        user: config.get('POSTGRES_USER'),
        password: config.get('POSTGRES_PASSWORD'),
        dbName: config.get('POSTGRES_DB'),
        autoLoadEntities: true,
        subscribers: [new AuditSubscriber()],
      }),
    }),
    CommandsModule,
    ConfigModule,
    GraphModule,
    IssuesModule,
    RedisModule,
    ScheduleModule.forRoot(),
    SessionsModule,
    UsersModule,
  ],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: AuditContextInterceptor },
    { provide: APP_INTERCEPTOR, useClass: ZodSerializerInterceptor },
  ],
})
export class AppModule {}
