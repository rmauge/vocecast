import type { PrismaClient, User, UserRole } from "../../../../../generated/prisma";
import type { IUserService, UpdateUserInput } from "../../interfaces/user.service";

export class PrismaUserService implements IUserService {
  constructor(private readonly db: PrismaClient) {}

  async getById(id: string): Promise<User | null> {
    return this.db.user.findUnique({ where: { id } });
  }

  async getByEmail(email: string): Promise<User | null> {
    return this.db.user.findUnique({ where: { email } });
  }

  async getByOrgId(orgId: string): Promise<User[]> {
    return this.db.user.findMany({ where: { orgId } });
  }

  async update(id: string, data: UpdateUserInput): Promise<User> {
    return this.db.user.update({ where: { id }, data });
  }

  async setRole(id: string, role: UserRole): Promise<User> {
    return this.db.user.update({ where: { id }, data: { role } });
  }

  async assignToOrg(userId: string, orgId: string): Promise<User> {
    return this.db.user.update({
      where: { id: userId },
      data: { orgId },
    });
  }
}
