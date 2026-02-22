import {
  S3Client,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import type { Readable } from "stream";
import type {
  IStorageProviderService,
  UploadInput,
} from "../../interfaces/storage-provider.service";

export class S3StorageProviderService implements IStorageProviderService {
  private readonly client: S3Client;
  private readonly bucket: string;

  constructor(region: string, bucket: string) {
    this.client = new S3Client({ region });
    this.bucket = bucket;
  }

  async upload(
    input: UploadInput,
  ): Promise<{ key: string; url: string }> {
    // Use multipart upload for potentially large files
    const upload = new Upload({
      client: this.client,
      params: {
        Bucket: this.bucket,
        Key: input.key,
        Body: input.body as Readable | Buffer,
        ContentType: input.contentType,
      },
    });

    await upload.done();

    return {
      key: input.key,
      url: `https://${this.bucket}.s3.amazonaws.com/${input.key}`,
    };
  }

  async getPresignedUrl(
    key: string,
    expiresInSeconds = 3600,
  ): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: this.bucket,
      Key: key,
    });

    return getSignedUrl(this.client, command, {
      expiresIn: expiresInSeconds,
    });
  }
}
