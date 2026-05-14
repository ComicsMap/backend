import * as DTOs from '@modules/sessions/sessions.dtos';
import { SessionsService } from '@modules/sessions/sessions.service';
import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { Request, Response } from 'express';
import { ZodSerializerDto } from 'nestjs-zod';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Post()
  @ZodSerializerDto(DTOs.CreateSessionResponse)
  @UseGuards(AuthGuard('local'))
  @HttpCode(HttpStatus.CREATED)
  public create(@Body() data: DTOs.CreateSessionBody, @Req() req: Request) {
    return this.sessionsService.create(req, data.rememberMe);
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  public delete(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.sessionsService.delete(req, res);
  }
}
