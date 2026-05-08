import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { CommandsModule } from '@modules/commands/commands.module';
import { ConfigModule } from '@modules/config/config.module';
import { ConfigService } from '@modules/config/config.service';
import { GraphModule } from '@modules/graph/graph.module';
import { IssuesModule } from '@modules/issues/issues.module';
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
      }),
    }),
    CommandsModule,
    ConfigModule,
    GraphModule,
    IssuesModule,
    ScheduleModule.forRoot(),
  ],
  providers: [{ provide: APP_INTERCEPTOR, useClass: ZodSerializerInterceptor }],
})
export class AppModule {}
