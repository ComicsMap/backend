import { Issue, IssueLayout, ReadingEdge } from '@comics-map/shared';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { GraphController } from '@modules/graph/graph.controller';
import { GraphService } from '@modules/graph/graph.service';
import { LayoutBuilderService } from '@modules/graph/layout-builder.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [MikroOrmModule.forFeature([Issue, IssueLayout, ReadingEdge])],
  controllers: [GraphController],
  providers: [GraphService, LayoutBuilderService],
  exports: [GraphService, LayoutBuilderService],
})
export class GraphModule {}
