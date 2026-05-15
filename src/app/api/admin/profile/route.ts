import { NextResponse } from "next/server";
import ProfileModel from "@/models/Profile";
import { connectToDatabase } from "@/lib/mongodb";
import { profileUpdateSchema } from "@/schemas/profile.schema";
import { requireAdminSession } from "@/lib/auth/guards";
import { defaultProfileSeed } from "@/lib/seed/portfolio";

export async function GET() {
  const session = await requireAdminSession();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await connectToDatabase();
  const profile = await ProfileModel.findOne().lean();

  return NextResponse.json(profile ?? defaultProfileSeed);
}

export async function PUT(request: Request) {
  const session = await requireAdminSession();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const payload = await request.json();
  const parsed = profileUpdateSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid profile payload", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  await connectToDatabase();
  const profile = await ProfileModel.findOneAndUpdate(
    {},
    { $set: parsed.data },
    { upsert: true, new: true, setDefaultsOnInsert: true },
  );

  return NextResponse.json(profile);
}
