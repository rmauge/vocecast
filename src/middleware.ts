import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { API, ROUTES } from "~/shared/constants";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Let auth API routes pass through
  if (pathname.startsWith(API.AUTH_BASE_PATH)) {
    return NextResponse.next();
  }

  // Protect dashboard routes
  if (pathname.startsWith(ROUTES.DASHBOARD)) {
    // Check for Better Auth session cookie
    const sessionToken =
      request.cookies.get("better-auth.session_token")?.value ??
      request.cookies.get("__Secure-better-auth.session_token")?.value;

    if (!sessionToken) {
      const loginUrl = new URL(ROUTES.LOGIN, request.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes other than auth, handled above)
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico, sitemap.xml, robots.txt
     */
    "/((?!api/trpc|api/inngest|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
