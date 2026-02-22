import type { PrismaClient, VoiceClone } from "../../../../../generated/prisma";
import type {
  IVoiceCloneService,
  CreateVoiceCloneInput,
  UpdateVoiceCloneInput,
} from "../../interfaces/voice-clone.service";
import type { PaginatedResult } from "../../interfaces/common";
import { DEFAULT_PAGE_SIZE } from "../../interfaces/common";
import { EntityNotFound } from "~/server/errors";

export class PrismaVoiceCloneService implements IVoiceCloneService {
  constructor(private readonly db: PrismaClient) {}

  async create(data: CreateVoiceCloneInput): Promise<VoiceClone> {
    return this.db.voiceClone.create({
      data: {
        name: data.name,
        description: data.description,
        cloneProvider: data.cloneProvider,
        providerId: data.providerId,
        org: { connect: { id: data.orgId } },
        author: { connect: { id: data.authorId } },
      },
    });
  }

  async getById(id: string, orgId: string): Promise<VoiceClone | null> {
    return this.db.voiceClone.findFirst({
      where: { id, orgId },
    });
  }

  async getByProviderId(
    providerId: string,
    orgId: string,
  ): Promise<VoiceClone | null> {
    return this.db.voiceClone.findFirst({
      where: { providerId, orgId },
    });
  }

  async update(
    id: string,
    orgId: string,
    data: UpdateVoiceCloneInput,
  ): Promise<VoiceClone> {
    const voice = await this.db.voiceClone.findFirst({
      where: { id, orgId },
    });
    if (!voice) throw new EntityNotFound(`VoiceClone ${id} not found`);
    return this.db.voiceClone.update({ where: { id }, data });
  }

  async delete(id: string, orgId: string): Promise<VoiceClone> {
    const voice = await this.db.voiceClone.findFirst({
      where: { id, orgId },
    });
    if (!voice) throw new EntityNotFound(`VoiceClone ${id} not found`);
    return this.db.voiceClone.delete({ where: { id } });
  }

  async list(orgId: string): Promise<VoiceClone[]> {
    return this.db.voiceClone.findMany({
      where: { orgId },
      orderBy: { name: "asc" },
    });
  }

  async listPaged(
    orgId: string,
    page: number,
    query?: string,
  ): Promise<PaginatedResult<VoiceClone>> {
    const currentPage = Math.max(1, page);
    const skip = (currentPage - 1) * DEFAULT_PAGE_SIZE;

    const where = {
      orgId,
      ...(query
        ? { name: { contains: query, mode: "insensitive" as const } }
        : {}),
    };

    const [items, total] = await Promise.all([
      this.db.voiceClone.findMany({
        where,
        skip,
        take: DEFAULT_PAGE_SIZE,
        orderBy: { name: "asc" },
      }),
      this.db.voiceClone.count({ where }),
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
