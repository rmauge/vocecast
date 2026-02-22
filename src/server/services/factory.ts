import { db } from "~/server/db";
import type { IVoiceProviderService } from "./interfaces/voice-provider.service";
import type { ICallProviderService } from "./interfaces/call-provider.service";
import type { IStorageProviderService } from "./interfaces/storage-provider.service";

interface ServiceFactoryOptions {
  elevenlabsApiKey?: string;
  twilioAccountSid?: string;
  twilioAuthToken?: string;
  awsRegion?: string;
  awsBucket?: string;
}

/**
 * Creates service instances. Supports BYOK (Bring Your Own Key) by accepting
 * optional API keys that override platform defaults.
 */
export function createVoiceProviderService(
  opts?: ServiceFactoryOptions,
): IVoiceProviderService {
  // Lazy import to avoid circular deps and allow tree-shaking
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { ElevenLabsVoiceProviderService } = require("./implementations/elevenlabs/voice-provider.service") as {
    ElevenLabsVoiceProviderService: new (apiKey: string) => IVoiceProviderService;
  };
  const apiKey = opts?.elevenlabsApiKey ?? process.env.ELEVENLABS_API_KEY;
  if (!apiKey) throw new Error("ELEVENLABS_API_KEY is required");
  return new ElevenLabsVoiceProviderService(apiKey);
}

export function createCallProviderService(
  opts?: ServiceFactoryOptions,
): ICallProviderService {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { TwilioCallProviderService } = require("./implementations/twilio/call-provider.service") as {
    TwilioCallProviderService: new (accountSid: string, authToken: string) => ICallProviderService;
  };
  const sid = opts?.twilioAccountSid ?? process.env.TWILIO_ACCOUNT_SID;
  const token = opts?.twilioAuthToken ?? process.env.TWILIO_AUTH_TOKEN;
  if (!sid || !token) throw new Error("TWILIO credentials are required");
  return new TwilioCallProviderService(sid, token);
}

export function createStorageProviderService(
  opts?: ServiceFactoryOptions,
): IStorageProviderService {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { S3StorageProviderService } = require("./implementations/aws/storage-provider.service") as {
    S3StorageProviderService: new (region: string, bucket: string) => IStorageProviderService;
  };
  const region = opts?.awsRegion ?? process.env.AWS_REGION;
  const bucket = opts?.awsBucket ?? process.env.AWS_S3_BUCKET;
  if (!region || !bucket) throw new Error("AWS S3 config is required");
  return new S3StorageProviderService(region, bucket);
}

/**
 * Creates a service factory for a specific organization.
 * Looks up org-specific API keys and falls back to platform defaults.
 */
export async function createOrgServiceFactory(orgId: string) {
  const apiKeys = await db.providerApiKey.findMany({
    where: { orgId },
  });

  const keyMap = new Map(apiKeys.map((k) => [k.provider, k.apiKey]));

  return {
    voiceProvider: () =>
      createVoiceProviderService({
        elevenlabsApiKey: keyMap.get("elevenlabs"),
      }),
    callProvider: () =>
      createCallProviderService({
        twilioAccountSid: keyMap.get("twilio_sid"),
        twilioAuthToken: keyMap.get("twilio_token"),
      }),
    storageProvider: () =>
      createStorageProviderService({
        awsRegion: keyMap.get("aws_region"),
        awsBucket: keyMap.get("aws_bucket"),
      }),
  };
}
