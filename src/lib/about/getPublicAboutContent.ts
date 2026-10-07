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
  const fallbackResources = Object.fromEntries(
    aboutContent.flatMap((category) =>
      category.groups.flatMap((group) =>
        group.items
          .filter((item) => item.resourceUrl && item.showResource)
          .map((item) => [item.id, item.resourceUrl as string]),
      ),
    ),
  );

  try {
    await connectToDatabase();
    const entries = await AboutEntry.find().lean();
    return {
      content: entries.reduce(
        (content, entry) => ({ ...content, [entry.key]: entry.content }),
        fallback,
      ),
      resources: entries.reduce(
        (resources, entry) =>
          entry.showResource && entry.resourceUrl
            ? { ...resources, [entry.key]: entry.resourceUrl }
            : resources,
        {},
      ),
    };
  } catch {
    return { content: fallback, resources: fallbackResources };
  }
}
