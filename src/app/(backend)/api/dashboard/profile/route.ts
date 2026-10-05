import { pendingResponse, requireAdmin } from "@/lib/auth/requireAdmin";

export async function GET() {
  const unauthorized = await requireAdmin();
  return unauthorized ?? pendingResponse("Profile");
}

export async function PUT() {
  const unauthorized = await requireAdmin();
  return unauthorized ?? pendingResponse("Profile");
}
