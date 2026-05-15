import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const protectedPathPrefix = "/dashboard";
const loginPath = "/dashboard/login";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith(protectedPathPrefix) || pathname === loginPath) {
    return NextResponse.next();
  }

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (token?.role === "admin") {
    return NextResponse.next();
  }

  const loginUrl = new URL(loginPath, request.url);
  loginUrl.searchParams.set("callbackUrl", pathname);

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
};
