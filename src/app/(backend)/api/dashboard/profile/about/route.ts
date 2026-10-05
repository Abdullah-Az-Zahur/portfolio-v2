import { NextResponse } from "next/server";
import { aboutContent } from "@/shared/data/aboutContent";
import { requireAdmin } from "@/lib/auth/requireAdmin";
import { connectToDatabase } from "@/lib/mongodb/connect";
import { AboutEntry } from "@/models/profile/AboutEntry";

function seedEntries() {
  return aboutContent.flatMap((category) =>
    category.groups.flatMap((group) =>
      group.items.map((item) => ({
        key: item.id,
        category: category.id,
        group: group.id,
        label: item.label,
        content: item.content,
      })),
    ),
  );
}

export async function GET() {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  try {
    await connectToDatabase();
    let entries = await AboutEntry.find()
      .sort({ category: 1, group: 1 })
      .lean();
    if (entries.length === 0) {
      await AboutEntry.insertMany(seedEntries());
      entries = await AboutEntry.find().lean();
    }
    return NextResponse.json({ entries });
  } catch (error) {
    console.error("Failed to load About content", error);
    return NextResponse.json(
      { message: "Unable to load About content." },
      { status: 500 },
    );
  }
}

export async function PUT(request: Request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  const body = await request.json().catch(() => null);
  if (typeof body?.key !== "string" || typeof body?.content !== "string") {
    return NextResponse.json(
      { message: "A content key and value are required." },
      { status: 400 },
    );
  }

  try {
    await connectToDatabase();
    const source = seedEntries().find((entry) => entry.key === body.key);
    if (!source)
      return NextResponse.json(
        { message: "Unknown About content key." },
        { status: 400 },
      );
    const entry = await AboutEntry.findOneAndUpdate(
      { key: body.key },
      { ...source, content: body.content },
      { upsert: true, new: true, runValidators: true },
    ).lean();
    return NextResponse.json({ entry });
  } catch (error) {
    console.error("Failed to save About content", error);
    return NextResponse.json(
      { message: "Unable to save About content." },
      { status: 500 },
    );
  }
}
