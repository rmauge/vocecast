import type { Organization } from "../../../../generated/prisma";

export interface CreateOrganizationInput {
  name: string;
  email?: string;
  phone?: string;
  outboundPhone?: string;
}

export interface UpdateOrganizationInput {
  name?: string;
  email?: string;
  phone?: string;
  outboundPhone?: string;
}

export interface IOrganizationService {
  create(data: CreateOrganizationInput): Promise<Organization>;
  getById(id: string): Promise<Organization | null>;
  getByEmail(email: string): Promise<Organization | null>;
  update(id: string, data: UpdateOrganizationInput): Promise<Organization>;
  delete(id: string): Promise<Organization>;
}
