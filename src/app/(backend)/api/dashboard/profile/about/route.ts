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
        iconKey: item.iconKey,
        color: item.color,
        resourceUrl: item.resourceUrl ?? "",
        showResource: item.showResource ?? Boolean(item.resourceUrl),
        order: group.items.indexOf(item),
        seedVersion: 2,
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
      .sort({ category: 1, group: 1, order: 1 })
      .lean();
    const seed = seedEntries();
    const hasCurrentSeed = await AboutEntry.exists({ seedVersion: 2 });
    if (!hasCurrentSeed) {
      await AboutEntry.bulkWrite(
        seed.map((entry) => ({
          updateOne: {
            filter: { key: entry.key },
            update: { $set: entry },
            upsert: true,
          },
        })),
      );
      entries = await AboutEntry.find()
        .sort({ category: 1, group: 1, order: 1 })
        .lean();
    } else if (entries.length === 0) {
      await AboutEntry.insertMany(seed);
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
    const seededSource = seedEntries().find((entry) => entry.key === body.key);
    const existingSource = await AboutEntry.findOne({ key: body.key }).lean();
    const source = seededSource ?? existingSource;
    if (!source)
      return NextResponse.json(
        { message: "Unknown About content key." },
        { status: 400 },
      );
    const entry = await AboutEntry.findOneAndUpdate(
      { key: body.key },
      {
        ...source,
        content: body.content,
        label: typeof body.label === "string" ? body.label : source.label,
        iconKey:
          typeof body.iconKey === "string" ? body.iconKey : source.iconKey,
        color: typeof body.color === "string" ? body.color : source.color,
        resourceUrl:
          typeof body.resourceUrl === "string"
            ? body.resourceUrl
            : source.resourceUrl,
        showResource:
          typeof body.showResource === "boolean"
            ? body.showResource
            : source.showResource,
        seedVersion: 2,
      },
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

export async function POST(request: Request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  const body = await request.json().catch(() => null);
  const category = aboutContent.find((item) => item.id === body?.category);
  const group = category?.groups.find((item) => item.id === body?.group);

  if (
    !category ||
    !group ||
    typeof body?.key !== "string" ||
    typeof body?.label !== "string" ||
    typeof body?.content !== "string"
  ) {
    return NextResponse.json(
      { message: "Category, group, key, label, and content are required." },
      { status: 400 },
    );
  }

  try {
    await connectToDatabase();
    const entry = await AboutEntry.create({
      key: body.key,
      category: category.id,
      group: group.id,
      label: body.label,
      content: body.content,
      iconKey: body.iconKey || "user",
      color: body.color || "blue",
      resourceUrl: body.resourceUrl || "",
      showResource: Boolean(body.showResource),
      order: group.items.length,
    });
    return NextResponse.json({ entry }, { status: 201 });
  } catch (error) {
    console.error("Failed to create About item", error);
    return NextResponse.json(
      { message: "Unable to create About item. The key may already exist." },
      { status: 400 },
    );
  }
}

export async function DELETE(request: Request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  const key = new URL(request.url).searchParams.get("key");
  if (!key) {
    return NextResponse.json(
      { message: "A content key is required." },
      { status: 400 },
    );
  }

  await connectToDatabase();
  await AboutEntry.deleteOne({ key });
  return NextResponse.json({ deleted: true });
}
