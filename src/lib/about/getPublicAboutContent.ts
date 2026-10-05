import { connectToDatabase } from "@/lib/mongodb/connect";
import { AboutEntry } from "@/models/profile/AboutEntry";
import { aboutContent } from "@/shared/data/aboutContent";

function fallbackContent() {
  return Object.fromEntries(
    aboutContent.flatMap((category) =>
      category.groups.flatMap((group) =>
        group.items.map((item) => [item.id, item.content]),
      ),
    ),
  );
}

export async function getPublicAboutContent() {
  const fallback = fallbackContent();

  try {
    await connectToDatabase();
    const entries = await AboutEntry.find().lean();
    return entries.reduce(
      (content, entry) => ({ ...content, [entry.key]: entry.content }),
      fallback,
    );
  } catch {
    return fallback;
  }
}
