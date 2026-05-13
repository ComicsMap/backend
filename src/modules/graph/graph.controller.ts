import * as DTOs from '@modules/graph/graph.dtos';
import { GraphService } from '@modules/graph/graph.service';
import * as Types from '@modules/graph/graph.types';
import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';

@Controller('graph')
export class GraphController {
  constructor(private readonly service: GraphService) {}

  @Get('meta')
  @HttpCode(HttpStatus.OK)
  public getMeta(): Promise<Types.GetMetaResponse> {
    return this.service.getMeta();
  }

  @Get('window')
  @HttpCode(HttpStatus.OK)
  public getWindow(
    @Query() query: DTOs.GetWindowQuery,
  ): Promise<Types.GetWindowResponse> {
    return this.service.getWindow({
      xMin: query.xMin,
      xMax: query.xMax,
      yMin: query.yMin,
      yMax: query.yMax,
      visibleXMin: query.visibleXMin,
      visibleXMax: query.visibleXMax,
      visibleYMin: query.visibleYMin,
      visibleYMax: query.visibleYMax,
      componentId: query.componentId,
      maxNodes: query.maxNodes,
    });
  }
}
