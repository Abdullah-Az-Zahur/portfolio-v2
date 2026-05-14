import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export const requireSession = async () => {
  const session = await getServerSession(authOptions);
  return Boolean(session);
};
