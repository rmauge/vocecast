import type { UserRole } from "../../../../../generated/prisma";
import type { IPermissionService, Capability } from "../../interfaces/permission.service";

/**
 * Role-based permission matrix:
 *
 * | Capability       | ADMIN | POWER_USER | USER |
 * |------------------|-------|------------|------|
 * | manage_users     | Yes   | No         | No   |
 * | manage_templates | Yes   | Yes (own)  | No   |
 * | manage_clients   | Yes   | Yes        | No   |
 * | clone_voice      | Yes   | Yes        | No   |
 * | schedule_calls   | Yes   | Yes        | No   |
 * | view_calls       | Yes   | Yes        | Yes  |
 * | billing          | Yes   | No         | No   |
 */

const PERMISSION_MATRIX: Record<Capability, UserRole[]> = {
  manage_users: ["ADMIN"],
  manage_templates: ["ADMIN", "POWER_USER"],
  manage_clients: ["ADMIN", "POWER_USER"],
  clone_voice: ["ADMIN", "POWER_USER"],
  schedule_calls: ["ADMIN", "POWER_USER"],
  view_calls: ["ADMIN", "POWER_USER", "USER"],
  billing: ["ADMIN"],
};

export class PermissionService implements IPermissionService {
  can(role: UserRole, capability: Capability): boolean {
    const allowedRoles = PERMISSION_MATRIX[capability];
    return allowedRoles.includes(role);
  }

  /**
   * Checks if the actor can manage a specific entity.
   * ADMIN can manage all entities in their org.
   * POWER_USER can only manage entities they authored (for capabilities like manage_templates).
   */
  canManageEntity(params: {
    actorRole: UserRole;
    actorId: string;
    entityAuthorId: string;
    capability: Capability;
  }): boolean {
    const { actorRole, actorId, entityAuthorId, capability } = params;

    if (!this.can(actorRole, capability)) {
      return false;
    }

    // ADMIN can manage everything
    if (actorRole === "ADMIN") {
      return true;
    }

    // POWER_USER can only manage their own entities
    return actorId === entityAuthorId;
  }
}
