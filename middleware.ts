import { NextRequest, NextResponse } from "next/server";
import { verifyAdminSessionTokenEdge } from "./src/lib/auth/adminAuthEdge";
import { ADMIN_SESSION_COOKIE } from "./src/lib/auth/adminSession";

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === "/dashboard/login") {
    return NextResponse.next();
  }

  const token = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;

  if (token && (await verifyAdminSessionTokenEdge(token))) {
    return NextResponse.next();
  }

  const nextPath = `${pathname}${search}`;
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = "/dashboard/login";
  redirectUrl.search = `next=${encodeURIComponent(nextPath)}`;

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
