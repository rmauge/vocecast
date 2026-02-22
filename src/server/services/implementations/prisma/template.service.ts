import type { PrismaClient, Template } from "../../../../../generated/prisma";
import type {
  ITemplateService,
  CreateTemplateInput,
  UpdateTemplateInput,
  TemplateContext,
} from "../../interfaces/template.service";
import type { PaginatedResult } from "../../interfaces/common";
import { DEFAULT_PAGE_SIZE } from "../../interfaces/common";
import { EntityNotFound } from "~/server/errors";
import Handlebars from "handlebars";

const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function spokenDay(dateString: string): string {
  const d = new Date(dateString);
  return WEEK_DAYS[d.getUTCDay()]!;
}

function spokenTime(dateString: string): string {
  const d = new Date(dateString);
  let hours = d.getUTCHours();
  const suffix = hours < 12 ? "a.m." : "p.m.";
  if (hours > 12) hours -= 12;
  if (hours === 0) hours = 12;
  const mins = d.getUTCMinutes();
  return `${hours}${mins === 0 ? "" : ` ${mins}`} ${suffix}`;
}

function spokenDaytime(dateString: string): string {
  return `${spokenDay(dateString)} at ${spokenTime(dateString)}`;
}

// Register Handlebars helpers once
Handlebars.registerHelper("day", spokenDay);
Handlebars.registerHelper("time", spokenTime);
Handlebars.registerHelper("day_time", spokenDaytime);

export class PrismaTemplateService implements ITemplateService {
  constructor(private readonly db: PrismaClient) {}

  async create(data: CreateTemplateInput): Promise<Template> {
    return this.db.template.create({
      data: {
        name: data.name,
        content: data.content,
        org: { connect: { id: data.orgId } },
        author: { connect: { id: data.authorId } },
      },
    });
  }

  async getById(id: string, orgId: string): Promise<Template | null> {
    return this.db.template.findFirst({
      where: { id, orgId },
    });
  }

  async update(
    id: string,
    orgId: string,
    data: UpdateTemplateInput,
  ): Promise<Template> {
    const template = await this.db.template.findFirst({
      where: { id, orgId },
    });
    if (!template) throw new EntityNotFound(`Template ${id} not found`);
    return this.db.template.update({ where: { id }, data });
  }

  async delete(id: string, orgId: string): Promise<Template> {
    const template = await this.db.template.findFirst({
      where: { id, orgId },
    });
    if (!template) throw new EntityNotFound(`Template ${id} not found`);
    return this.db.template.delete({ where: { id } });
  }

  async list(orgId: string): Promise<Template[]> {
    return this.db.template.findMany({
      where: { orgId },
      orderBy: { name: "asc" },
    });
  }

  async listPaged(
    orgId: string,
    page: number,
    query?: string,
  ): Promise<PaginatedResult<Template>> {
    const currentPage = Math.max(1, page);
    const skip = (currentPage - 1) * DEFAULT_PAGE_SIZE;

    const where = {
      orgId,
      ...(query
        ? { name: { contains: query, mode: "insensitive" as const } }
        : {}),
    };

    const [items, total] = await Promise.all([
      this.db.template.findMany({
        where,
        skip,
        take: DEFAULT_PAGE_SIZE,
        orderBy: { name: "asc" },
      }),
      this.db.template.count({ where }),
    ]);

    return {
      items,
      total,
      page: currentPage,
      pageSize: DEFAULT_PAGE_SIZE,
      totalPages: Math.ceil(total / DEFAULT_PAGE_SIZE),
    };
  }

  async count(orgId: string): Promise<number> {
    return this.db.template.count({ where: { orgId } });
  }

  async resolve(
    templateId: string,
    orgId: string,
    context: TemplateContext,
  ): Promise<string> {
    const template = await this.getById(templateId, orgId);
    if (!template) {
      throw new EntityNotFound(`Template '${templateId}' not found`);
    }

    const compiled = Handlebars.compile(template.content);
    return compiled(context);
  }
}
