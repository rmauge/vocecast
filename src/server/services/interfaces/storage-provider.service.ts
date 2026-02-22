import type { Readable } from "stream";

export interface UploadInput {
  key: string;
  body: Readable | ReadableStream | Buffer | Uint8Array;
  contentType: string;
}

export interface IStorageProviderService {
  upload(input: UploadInput): Promise<{ key: string; url: string }>;
  getPresignedUrl(key: string, expiresInSeconds?: number): Promise<string>;
}
