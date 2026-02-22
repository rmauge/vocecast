import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";
import type {
  IVoiceProviderService,
  VoiceInfo,
  CreateVoiceInput,
} from "../../interfaces/voice-provider.service";
import { EntityNotFound, ApplicationError } from "~/server/errors";

export class ElevenLabsVoiceProviderService implements IVoiceProviderService {
  private readonly client: ElevenLabsClient;

  constructor(apiKey: string) {
    this.client = new ElevenLabsClient({ apiKey });
  }

  async getVoices(filters?: {
    userId?: string;
    orgId?: string;
  }): Promise<VoiceInfo[]> {
    const response = await this.client.voices.search({
      sort: "name",
      category: "cloned",
      includeTotalCount: true,
    });

    let voices = response.voices.map((v) => this.toVoiceInfo(v));

    if (filters?.userId ?? filters?.orgId) {
      voices = voices.filter((v) => {
        if (!v.labels) return false;
        const matchesOwner =
          !filters?.userId || v.labels.owner === filters.userId;
        const matchesOrg =
          !filters?.orgId || v.labels.org === filters.orgId;
        return matchesOwner || matchesOrg;
      });
    }

    return voices;
  }

  async getVoice(voiceId: string): Promise<VoiceInfo> {
    try {
      const voice = await this.client.voices.get(voiceId);
      return this.toVoiceInfo(voice);
    } catch {
      throw new EntityNotFound(`Voice ${voiceId} not found`);
    }
  }

  async createVoice(input: CreateVoiceInput): Promise<{ voiceId: string }> {
    try {
      const response = await this.client.voices.ivc.create({
        name: input.name,
        description: input.description,
        files: input.files,
        labels: input.labels ? JSON.stringify(input.labels) : undefined,
      });

      return { voiceId: response.voiceId };
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new ApplicationError(error.message, error.cause);
      }
      throw new ApplicationError("Failed to create voice");
    }
  }

  async deleteVoice(voiceId: string): Promise<void> {
    await this.client.voices.delete(voiceId);
  }

  async textToSpeech(voiceId: string, text: string): Promise<ReadableStream<Uint8Array>> {
    try {
      const audio = await this.client.textToSpeech.stream(voiceId, {
        text,
        modelId: "eleven_multilingual_v2",
        voiceSettings: {
          stability: 0.1,
          similarityBoost: 0.3,
          style: 0.2,
        },
      });

      return audio;
    } catch (error: unknown) {
      throw new ApplicationError(
        "Failed to convert text to speech",
        error,
      );
    }
  }

  private toVoiceInfo(voice: { voiceId?: string; voice_id?: string; name?: string; category?: string; labels?: Record<string, string> }): VoiceInfo {
    return {
      voiceId: (voice.voiceId ?? voice.voice_id)!,
      name: voice.name ?? "",
      category: voice.category,
      labels: voice.labels,
    };
  }
}
