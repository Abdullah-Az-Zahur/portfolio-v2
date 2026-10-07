import { NextResponse } from "next/server";
import { aboutContent } from "@/shared/data/aboutContent";
import { connectToDatabase } from "@/lib/mongodb/connect";
import { AboutEntry } from "@/models/profile/AboutEntry";

function seedEntries() {
  return aboutContent.flatMap((category) =>
    category.groups.flatMap((group) =>
      group.items.map((item, order) => ({
        key: item.id,
        category: category.id,
        group: group.id,
        label: item.label,
        content: item.content,
        iconKey: item.iconKey,
        color: item.color,
        resourceUrl: item.resourceUrl ?? "",
        showResource: item.showResource ?? Boolean(item.resourceUrl),
        order,
      })),
    ),
  );
}

export async function GET() {
  try {
    await connectToDatabase();
    const entries = await AboutEntry.find()
      .sort({ category: 1, group: 1, order: 1 })
      .lean();
    return NextResponse.json({
      entries: entries.length ? entries : seedEntries(),
    });
  } catch {
    return NextResponse.json({ entries: seedEntries() });
  }
}
