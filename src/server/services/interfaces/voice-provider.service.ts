export interface VoiceInfo {
  voiceId: string;
  name: string;
  category?: string;
  labels?: Record<string, string>;
}

export interface CreateVoiceInput {
  name: string;
  description?: string;
  files: (Blob | File | ReadableStream)[];
  labels?: Record<string, string>;
}

export interface IVoiceProviderService {
  getVoices(filters?: {
    userId?: string;
    orgId?: string;
  }): Promise<VoiceInfo[]>;
  getVoice(voiceId: string): Promise<VoiceInfo>;
  createVoice(input: CreateVoiceInput): Promise<{ voiceId: string }>;
  deleteVoice(voiceId: string): Promise<void>;
  textToSpeech(voiceId: string, text: string): Promise<ReadableStream<Uint8Array>>;
}
