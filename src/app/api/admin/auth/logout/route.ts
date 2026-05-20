import { ADMIN_SESSION_COOKIE } from "@/lib/auth/adminSession";
import { NextResponse } from "next/server";

function clearSessionCookie(response: NextResponse) {
  response.cookies.set({
    name: ADMIN_SESSION_COOKIE,
    value: "",
    maxAge: 0,
    expires: new Date(0),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  const legacyDashboardCookie =
    `${ADMIN_SESSION_COOKIE}=; Path=/dashboard; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Max-Age=0; HttpOnly; SameSite=Lax` +
    (process.env.NODE_ENV === "production" ? "; Secure" : "");
  response.headers.append("Set-Cookie", legacyDashboardCookie);

  response.headers.set("Cache-Control", "no-store");
}

export async function POST() {
  const response = NextResponse.json({ success: true });

  clearSessionCookie(response);

  return response;
}

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const requestedRedirect =
    requestUrl.searchParams.get("redirect") || "/dashboard/login";
  const redirectPath = requestedRedirect.startsWith("/")
    ? requestedRedirect
    : "/dashboard/login";

  const redirectUrl = new URL(redirectPath, requestUrl.origin);
  const response = NextResponse.redirect(redirectUrl);

  clearSessionCookie(response);

  return response;
}
