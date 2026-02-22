import type { Client } from "../../../../generated/prisma";
import type { PaginatedResult } from "./common";

export interface CreateClientInput {
  firstName: string;
  lastName: string;
  preferredName?: string;
  email: string;
  phoneNumber: string;
  orgId: string;
  authorId: string;
}

export interface UpdateClientInput {
  firstName?: string;
  lastName?: string;
  preferredName?: string;
  email?: string;
  phoneNumber?: string;
}

export interface IClientService {
  create(data: CreateClientInput): Promise<Client>;
  getById(id: string, orgId: string): Promise<Client | null>;
  update(id: string, orgId: string, data: UpdateClientInput): Promise<Client>;
  delete(id: string, orgId: string): Promise<Client>;
  list(orgId: string): Promise<Client[]>;
  listPaged(
    orgId: string,
    page: number,
    query?: string,
  ): Promise<PaginatedResult<Client>>;
  count(orgId: string): Promise<number>;
}
