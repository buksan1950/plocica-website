import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Pass the request path through as a header so the root layout can read it
 * and render the correct <html lang> server-side. This makes pages dynamic
 * (Vercel caches per URL anyway, so performance impact is negligible).
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("x-pathname", request.nextUrl.pathname);
  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
