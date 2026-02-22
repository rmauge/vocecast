import type { Template } from "../../../../generated/prisma";
import type { PaginatedResult } from "./common";

export interface CreateTemplateInput {
  name: string;
  content: string;
  orgId: string;
  authorId: string;
}

export interface UpdateTemplateInput {
  name?: string;
  content?: string;
}

export interface TemplateContext {
  client: {
    firstName?: string;
    lastName?: string;
    preferredName?: string;
  };
  appointmentTime?: string;
  date?: string;
}

export interface ITemplateService {
  create(data: CreateTemplateInput): Promise<Template>;
  getById(id: string, orgId: string): Promise<Template | null>;
  update(
    id: string,
    orgId: string,
    data: UpdateTemplateInput,
  ): Promise<Template>;
  delete(id: string, orgId: string): Promise<Template>;
  list(orgId: string): Promise<Template[]>;
  listPaged(
    orgId: string,
    page: number,
    query?: string,
  ): Promise<PaginatedResult<Template>>;
  count(orgId: string): Promise<number>;
  resolve(templateId: string, orgId: string, context: TemplateContext): Promise<string>;
}
