import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function requireAdmin() {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json(
      { message: "Authentication required." },
      { status: 401 },
    );
  }

  return null;
}

export function pendingResponse(resource: string) {
  return NextResponse.json(
    {
      message: `${resource} API is ready for MongoDB CRUD integration.`,
      status: "pending",
    },
    { status: 501 },
  );
}
