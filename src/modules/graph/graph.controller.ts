import * as DTOs from '@modules/graph/graph.dtos';
import { GraphService } from '@modules/graph/graph.service';
import * as Types from '@modules/graph/graph.types';
import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';

@Controller('graph')
export class GraphController {
  constructor(private readonly service: GraphService) {}

  @Get('subgraph')
  @HttpCode(HttpStatus.OK)
  public getSubgraph(
    @Query() query: DTOs.GetSubgraphQuery,
  ): Promise<Types.GetSubgraphResponse> {
    return this.service.getSubgraph(query.issueUuid, query.depth);
  }
}
