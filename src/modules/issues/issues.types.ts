import * as DTOs from '@modules/issues/issues.dtos';

export type ListIssuesFilters = Partial<DTOs.ListIssuesQuery['filters']>;
export type ListIssuesPagination = Partial<DTOs.ListIssuesQuery['pagination']>;

export type CreateIssuePayload = DTOs.CreateIssueBody;

export type PartialUpdateIssuePayload = DTOs.PartialUpdateIssueBody;
