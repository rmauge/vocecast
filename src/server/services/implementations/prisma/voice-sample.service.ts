import type { PrismaClient, VoiceSample } from "../../../../../generated/prisma";
import type {
  IVoiceSampleService,
  CreateVoiceSampleInput,
  UpdateVoiceSampleInput,
} from "../../interfaces/voice-sample.service";
import type { PaginatedResult } from "../../interfaces/common";
import { DEFAULT_PAGE_SIZE } from "../../interfaces/common";
import { EntityNotFound } from "~/server/errors";

export class PrismaVoiceSampleService implements IVoiceSampleService {
  constructor(private readonly db: PrismaClient) {}

  async create(data: CreateVoiceSampleInput): Promise<VoiceSample> {
    return this.db.voiceSample.create({
      data: {
        filename: data.filename,
        name: data.name,
        description: data.description,
        storageKey: data.storageKey,
        org: { connect: { id: data.orgId } },
        author: { connect: { id: data.authorId } },
      },
    });
  }

  async getById(id: string, orgId: string): Promise<VoiceSample | null> {
    return this.db.voiceSample.findFirst({
      where: { id, orgId },
    });
  }

  async update(
    id: string,
    orgId: string,
    data: UpdateVoiceSampleInput,
  ): Promise<VoiceSample> {
    const sample = await this.db.voiceSample.findFirst({
      where: { id, orgId },
    });
    if (!sample) throw new EntityNotFound(`VoiceSample ${id} not found`);
    return this.db.voiceSample.update({ where: { id }, data });
  }

  async delete(id: string, orgId: string): Promise<VoiceSample> {
    const sample = await this.db.voiceSample.findFirst({
      where: { id, orgId },
    });
    if (!sample) throw new EntityNotFound(`VoiceSample ${id} not found`);
    return this.db.voiceSample.delete({ where: { id } });
  }

  async list(orgId: string): Promise<VoiceSample[]> {
    return this.db.voiceSample.findMany({
      where: { orgId },
      orderBy: { createdAt: "desc" },
    });
  }

  async listPaged(
    orgId: string,
    page: number,
    query?: string,
  ): Promise<PaginatedResult<VoiceSample>> {
    const currentPage = Math.max(1, page);
    const skip = (currentPage - 1) * DEFAULT_PAGE_SIZE;

    const where = {
      orgId,
      ...(query
        ? { name: { contains: query, mode: "insensitive" as const } }
        : {}),
    };

    const [items, total] = await Promise.all([
      this.db.voiceSample.findMany({
        where,
        skip,
        take: DEFAULT_PAGE_SIZE,
        orderBy: { createdAt: "desc" },
      }),
      this.db.voiceSample.count({ where }),
    ]);

    return {
      items,
      total,
      page: currentPage,
      pageSize: DEFAULT_PAGE_SIZE,
      totalPages: Math.ceil(total / DEFAULT_PAGE_SIZE),
    };
  }
}
