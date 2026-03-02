import { NextRequest, NextResponse } from "next/server";
import * as plivo from "plivo";

export async function GET(request: NextRequest) {
  const audioUrl = request.nextUrl.searchParams.get("audioUrl");

  if (!audioUrl) {
    return NextResponse.json(
      { error: "audioUrl query parameter is required" },
      { status: 400 },
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const response = new (plivo.Response as any)();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  response.addPlay(audioUrl);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  return new NextResponse(response.toXML() as string, {
    headers: { "Content-Type": "application/xml" },
  });
}
