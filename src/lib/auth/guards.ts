import { getServerSession } from "next-auth";
import { authOptions } from "./options";

export async function getAdminSession() {
  return getServerSession(authOptions);
}

export async function requireAdminSession() {
  const session = await getAdminSession();

  if (!session?.user?.email) {
    return null;
  }

  return session;
}
