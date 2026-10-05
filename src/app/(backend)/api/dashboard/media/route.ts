import { pendingResponse, requireAdmin } from "@/lib/auth/requireAdmin";

export async function GET() {
  const unauthorized = await requireAdmin();
  return unauthorized ?? pendingResponse("Media");
}

export async function POST() {
  const unauthorized = await requireAdmin();
  return unauthorized ?? pendingResponse("Media upload");
}
