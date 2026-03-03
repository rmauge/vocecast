import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { auth } from "~/server/better-auth";
import { db } from "~/server/db";
import {
  createStorageProviderService,
  voiceSampleService,
} from "~/server/services";
import {
  MAX_VOICE_SAMPLE_SIZE,
  isAllowedVoiceSampleType,
} from "~/shared/schemas";

export async function POST(request: NextRequest) {
  // 1. Authenticate
  const session = await auth.api.getSession({
    headers: request.headers,
  });
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    select: { id: true, orgId: true },
  });
  if (!user?.orgId) {
    return NextResponse.json(
      { error: "No organization membership" },
      { status: 403 },
    );
  }

  // 2. Parse multipart form data
  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  const name = (formData.get("name") as string | null)?.trim();
  const description = (formData.get("description") as string | null)?.trim();

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }
  if (!name || name.length === 0) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (file.size > MAX_VOICE_SAMPLE_SIZE) {
    return NextResponse.json(
      { error: "File too large (max 10MB)" },
      { status: 400 },
    );
  }
  if (!isAllowedVoiceSampleType(file.type)) {
    return NextResponse.json(
      { error: `Invalid file type: ${file.type}` },
      { status: 400 },
    );
  }

  // 3. Build storage key: {orgId}/{userId}/{yyyy}/{mm}/{dd}/{uuid}.{ext}
  const now = new Date();
  const yyyy = now.getFullYear().toString();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const ext = file.type.includes("webm") ? "webm" : "wav";
  const storageKey = `${user.orgId}/${user.id}/${yyyy}/${mm}/${dd}/${crypto.randomUUID()}.${ext}`;

  // 4. Upload to S3 / MinIO
  const storageProvider = createStorageProviderService();
  const buffer = Buffer.from(await file.arrayBuffer());
  await storageProvider.upload({
    key: storageKey,
    body: buffer,
    contentType: file.type,
  });

  // 5. Create DB record
  const voiceSample = await voiceSampleService.create({
    filename: file.name,
    name,
    description: description ?? undefined,
    storageKey,
    orgId: user.orgId,
    authorId: user.id,
  });

  return NextResponse.json(voiceSample, { status: 201 });
}
