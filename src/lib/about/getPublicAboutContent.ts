import { connectToDatabase } from "@/lib/mongodb/connect";
import { AboutEntry } from "@/models/profile/AboutEntry";

export async function getPublicAboutContent() {
  await connectToDatabase();
  const entries = await AboutEntry.find()
    .sort({ category: 1, group: 1, order: 1 })
    .lean();

  return {
    content: Object.fromEntries(
      entries.map((entry) => [entry.key, entry.content]),
    ),
    resources: Object.fromEntries(
      entries
        .filter((entry) => entry.showResource && entry.resourceUrl)
        .map((entry) => [entry.key, entry.resourceUrl as string]),
    ),
  };
}
