import { z } from "zod";

/** Max upload size: 10 MB */
export const MAX_VOICE_SAMPLE_SIZE = 10 * 1024 * 1024;

/** Allowed MIME types for voice samples */
export const ALLOWED_VOICE_SAMPLE_TYPES = [
  "audio/wav",
  "audio/wave",
  "audio/x-wav",
  "audio/webm",
] as const;

/** Check if a MIME type is allowed, ignoring codec suffixes (e.g. "audio/webm;codecs=opus") */
export function isAllowedVoiceSampleType(mimeType: string): boolean {
  const base = mimeType.split(";")[0]!.trim();
  return ALLOWED_VOICE_SAMPLE_TYPES.includes(
    base as (typeof ALLOWED_VOICE_SAMPLE_TYPES)[number],
  );
}

export const createVoiceSampleSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  description: z.string().max(500).optional(),
});

export const updateVoiceSampleSchema = createVoiceSampleSchema.partial();

export type CreateVoiceSampleFormValues = z.infer<
  typeof createVoiceSampleSchema
>;
export type UpdateVoiceSampleFormValues = z.infer<
  typeof updateVoiceSampleSchema
>;
