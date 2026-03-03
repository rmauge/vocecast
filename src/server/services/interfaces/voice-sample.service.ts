import type { VoiceSample } from "../../../../generated/prisma";
import type { PaginatedResult } from "./common";

export interface CreateVoiceSampleInput {
  filename: string;
  name: string;
  description?: string;
  storageKey: string;
  orgId: string;
  authorId: string;
}

export interface UpdateVoiceSampleInput {
  name?: string;
  description?: string;
}

export interface IVoiceSampleService {
  create(data: CreateVoiceSampleInput): Promise<VoiceSample>;
  getById(id: string, orgId: string): Promise<VoiceSample | null>;
  update(
    id: string,
    orgId: string,
    data: UpdateVoiceSampleInput,
  ): Promise<VoiceSample>;
  delete(id: string, orgId: string): Promise<VoiceSample>;
  list(orgId: string): Promise<VoiceSample[]>;
  listPaged(
    orgId: string,
    page: number,
    query?: string,
  ): Promise<PaginatedResult<VoiceSample>>;
}
