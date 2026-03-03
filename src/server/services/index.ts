import { db } from "~/server/db";

// Prisma-backed services (instantiated once with shared db)
import { PrismaOrganizationService } from "./implementations/prisma/organization.service";
import { PrismaUserService } from "./implementations/prisma/user.service";
import { PermissionService } from "./implementations/prisma/permission.service";
import { PrismaClientService } from "./implementations/prisma/client.service";
import { PrismaTemplateService } from "./implementations/prisma/template.service";
import { PrismaVoiceCloneService } from "./implementations/prisma/voice-clone.service";
import { PrismaTransactionOutboxService } from "./implementations/prisma/transaction-outbox.service";
import { PrismaVoiceSampleService } from "./implementations/prisma/voice-sample.service";

export const organizationService = new PrismaOrganizationService(db);
export const userService = new PrismaUserService(db);
export const permissionService = new PermissionService();
export const clientService = new PrismaClientService(db);
export const templateService = new PrismaTemplateService(db);
export const voiceCloneService = new PrismaVoiceCloneService(db);
export const voiceSampleService = new PrismaVoiceSampleService(db);
export const transactionOutboxService = new PrismaTransactionOutboxService(db);

// Re-export factory for integration services (voice provider, call provider, storage)
export {
  createVoiceProviderService,
  createCallProviderService,
  createCallProviderWithFailover,
  createStorageProviderService,
  createOrgServiceFactory,
  callProviderHealthService,
} from "./factory";
