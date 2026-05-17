import { Issue } from '@comics-map/shared/entities';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { IssuesController } from '@modules/issues/issues.controller';
import { IssuesService } from '@modules/issues/issues.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [Issue],
    }),
  ],
  controllers: [IssuesController],
  providers: [IssuesService],
})
export class IssuesModule {}
