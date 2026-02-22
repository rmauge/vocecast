import type { PrismaClient, Organization } from "../../../../../generated/prisma";
import type {
  IOrganizationService,
  CreateOrganizationInput,
  UpdateOrganizationInput,
} from "../../interfaces/organization.service";

export class PrismaOrganizationService implements IOrganizationService {
  constructor(private readonly db: PrismaClient) {}

  async create(data: CreateOrganizationInput): Promise<Organization> {
    return this.db.organization.create({ data });
  }

  async getById(id: string): Promise<Organization | null> {
    return this.db.organization.findUnique({ where: { id } });
  }

  async getByEmail(email: string): Promise<Organization | null> {
    return this.db.organization.findUnique({ where: { email } });
  }

  async update(
    id: string,
    data: UpdateOrganizationInput,
  ): Promise<Organization> {
    return this.db.organization.update({ where: { id }, data });
  }

  async delete(id: string): Promise<Organization> {
    return this.db.organization.delete({ where: { id } });
  }
}
