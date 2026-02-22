import type { User, UserRole } from "../../../../generated/prisma";

export interface UpdateUserInput {
  name?: string;
  role?: UserRole;
  orgId?: string;
}

export interface IUserService {
  getById(id: string): Promise<User | null>;
  getByEmail(email: string): Promise<User | null>;
  getByOrgId(orgId: string): Promise<User[]>;
  update(id: string, data: UpdateUserInput): Promise<User>;
  setRole(id: string, role: UserRole): Promise<User>;
  assignToOrg(userId: string, orgId: string): Promise<User>;
}
