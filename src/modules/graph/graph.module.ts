import { Issue, ReadingEdge } from '@entities/index';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { GraphController } from '@modules/graph/graph.controller';
import { GraphService } from '@modules/graph/graph.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [MikroOrmModule.forFeature([Issue, ReadingEdge])],
  controllers: [GraphController],
  providers: [GraphService],
  exports: [GraphService],
})
export class GraphModule {}
