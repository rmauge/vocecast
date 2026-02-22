import type { PrismaClient, Client } from "../../../../../generated/prisma";
import type {
  IClientService,
  CreateClientInput,
  UpdateClientInput,
} from "../../interfaces/client.service";
import type { PaginatedResult } from "../../interfaces/common";
import { DEFAULT_PAGE_SIZE } from "../../interfaces/common";

export class PrismaClientService implements IClientService {
  constructor(private readonly db: PrismaClient) {}

  async create(data: CreateClientInput): Promise<Client> {
    return this.db.client.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        preferredName: data.preferredName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        org: { connect: { id: data.orgId } },
        author: { connect: { id: data.authorId } },
      },
    });
  }

  async getById(id: string, orgId: string): Promise<Client | null> {
    return this.db.client.findFirst({
      where: { id, orgId },
    });
  }

  async update(
    id: string,
    orgId: string,
    data: UpdateClientInput,
  ): Promise<Client> {
    return this.db.client.update({
      where: { id },
      data: {
        ...data,
        orgId, // ensure orgId filter
      },
    });
  }

  async delete(id: string, orgId: string): Promise<Client> {
    // Verify ownership first
    const client = await this.db.client.findFirst({ where: { id, orgId } });
    if (!client) throw new Error(`Client ${id} not found in org ${orgId}`);
    return this.db.client.delete({ where: { id } });
  }

  async list(orgId: string): Promise<Client[]> {
    return this.db.client.findMany({
      where: { orgId },
      orderBy: { lastName: "asc" },
    });
  }

  async listPaged(
    orgId: string,
    page: number,
    query?: string,
  ): Promise<PaginatedResult<Client>> {
    const currentPage = Math.max(1, page);
    const skip = (currentPage - 1) * DEFAULT_PAGE_SIZE;

    const where = {
      orgId,
      ...(query
        ? {
            OR: [
              { firstName: { contains: query, mode: "insensitive" as const } },
              { lastName: { contains: query, mode: "insensitive" as const } },
              { email: { contains: query, mode: "insensitive" as const } },
            ],
          }
        : {}),
    };

    const [items, total] = await Promise.all([
      this.db.client.findMany({
        where,
        skip,
        take: DEFAULT_PAGE_SIZE,
        orderBy: { lastName: "asc" },
      }),
      this.db.client.count({ where }),
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
    return this.db.client.count({ where: { orgId } });
  }
}
