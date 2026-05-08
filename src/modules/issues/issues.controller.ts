import { wrap } from '@mikro-orm/postgresql';
import * as DTOs from '@modules/issues/issues.dtos';
import { IssuesService } from '@modules/issues/issues.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotImplementedException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ZodSerializerDto } from 'nestjs-zod';

@Controller('issues')
export class IssuesController {
  constructor(private readonly issuesService: IssuesService) {}

  @Get()
  @ZodSerializerDto(DTOs.ListIssuesResponse)
  @HttpCode(HttpStatus.OK)
  public async list(@Query() query: DTOs.ListIssuesQuery) {
    const { results, ...rest } = await this.issuesService.list(
      query.filters,
      query.pagination,
    );
    return {
      ...rest,
      results: results.map((issue) => wrap(issue).toObject()),
    };
  }

  @Post()
  @ZodSerializerDto(DTOs.CreateIssueResponse)
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() data: DTOs.CreateIssueBody) {
    const issue = await this.issuesService.create(data);
    return wrap(issue).toObject();
  }

  @Get(':uuid')
  @ZodSerializerDto(DTOs.RetrieveIssueResponse)
  @HttpCode(HttpStatus.OK)
  public async retrieve(@Param() params: DTOs.RetrieveIssueParams) {
    const issue = await this.issuesService.retrieve(params.uuid);
    return wrap(issue).toObject();
  }

  @Patch(':uuid')
  @ZodSerializerDto(DTOs.PartialUpdateIssueResponse)
  @HttpCode(HttpStatus.OK)
  public async partialUpdate(
    @Param() params: DTOs.PartialUpdateIssueParams,
    @Body() data: DTOs.PartialUpdateIssueBody,
  ) {
    const issue = await this.issuesService.partialUpdate(params.uuid, data);
    return wrap(issue).toObject();
  }

  @Delete(':uuid')
  @HttpCode(HttpStatus.NO_CONTENT)
  public delete(
    @Param() params: DTOs.DeleteIssueParams,
    @Query() query: DTOs.DeleteIssueQuery,
  ) {
    return this.issuesService.delete(params.uuid, query.soft);
  }

  @Post(':uuid/collection')
  @HttpCode(HttpStatus.CREATED)
  public addToCollection() {
    throw new NotImplementedException();
  }

  @Delete(':uuid/collection')
  @HttpCode(HttpStatus.NO_CONTENT)
  public removeFromCollection() {
    throw new NotImplementedException();
  }

  @Post(':uuid/wishlist')
  @HttpCode(HttpStatus.CREATED)
  public addToWishlist() {
    throw new NotImplementedException();
  }

  @Delete(':uuid/wishlist')
  @HttpCode(HttpStatus.NO_CONTENT)
  public removeFromWishlist() {
    throw new NotImplementedException();
  }
}
