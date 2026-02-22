import type { UserRole } from "../../../../generated/prisma";

export type Capability =
  | "manage_users"
  | "manage_templates"
  | "manage_clients"
  | "clone_voice"
  | "schedule_calls"
  | "view_calls"
  | "billing";

export interface IPermissionService {
  can(role: UserRole, capability: Capability): boolean;
  canManageEntity(params: {
    actorRole: UserRole;
    actorId: string;
    entityAuthorId: string;
    capability: Capability;
  }): boolean;
}
