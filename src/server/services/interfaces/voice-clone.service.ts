import type { CloneProvider, VoiceClone } from "../../../../generated/prisma";
import type { PaginatedResult } from "./common";

export interface CreateVoiceCloneInput {
  name: string;
  description?: string;
  cloneProvider: CloneProvider;
  providerId: string;
  orgId: string;
  authorId: string;
}

export interface UpdateVoiceCloneInput {
  name?: string;
  description?: string;
}

export interface IVoiceCloneService {
  create(data: CreateVoiceCloneInput): Promise<VoiceClone>;
  getById(id: string, orgId: string): Promise<VoiceClone | null>;
  getByProviderId(
    providerId: string,
    orgId: string,
  ): Promise<VoiceClone | null>;
  update(
    id: string,
    orgId: string,
    data: UpdateVoiceCloneInput,
  ): Promise<VoiceClone>;
  delete(id: string, orgId: string): Promise<VoiceClone>;
  list(orgId: string): Promise<VoiceClone[]>;
  listPaged(
    orgId: string,
    page: number,
    query?: string,
  ): Promise<PaginatedResult<VoiceClone>>;
}
