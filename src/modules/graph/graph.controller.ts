import * as DTOs from '@modules/graph/graph.dtos';
import { GraphService } from '@modules/graph/graph.service';
import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { ZodSerializerDto } from 'nestjs-zod';

@Controller('graph')
export class GraphController {
  constructor(private readonly service: GraphService) {}

  @Get('meta')
  @ZodSerializerDto(DTOs.GetMetaResponse)
  @HttpCode(HttpStatus.OK)
  public getMeta() {
    return this.service.getMeta();
  }

  @Get('window')
  @ZodSerializerDto(DTOs.GetWindowResponse)
  @HttpCode(HttpStatus.OK)
  public getWindow(@Query() query: DTOs.GetWindowQuery) {
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
