import { verifyAdminSessionToken } from "@/lib/auth/adminAuth";
import { ADMIN_SESSION_COOKIE } from "@/lib/auth/adminSession";
import { unstable_noStore as noStore } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function requireAdminAuth(nextPath: string) {
  noStore();

  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

  if (token && verifyAdminSessionToken(token)) {
    return;
  }

  const encodedNextPath = encodeURIComponent(nextPath);
  redirect(`/dashboard/login?next=${encodedNextPath}`);
}
