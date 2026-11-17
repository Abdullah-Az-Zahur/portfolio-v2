import { unstable_cache } from "next/cache";
import { connectToDatabase } from "@/lib/mongodb/connect";
import { SiteSettings } from "@/models/settings/SiteSettings";
import { contactDetails, siteLinks } from "@/shared/data/siteLinks";

export type PublicSiteSettings = typeof siteLinks & typeof contactDetails;

const loadSiteSettings = unstable_cache(
  async (): Promise<PublicSiteSettings> => {
    await connectToDatabase();
    const settings = await SiteSettings.findOne({ key: "site-links" })
      .lean()
      .exec();

    return {
      ...siteLinks,
      ...contactDetails,
      ...(settings
        ? {
            github: settings.github || siteLinks.github,
            linkedin: settings.linkedin || siteLinks.linkedin,
            facebook: settings.facebook || siteLinks.facebook,
            youtube: settings.youtube || siteLinks.youtube,
            twitter: settings.twitter || siteLinks.twitter,
            instagram: settings.instagram || siteLinks.instagram,
            resume: settings.resume || siteLinks.resume,
            cv: settings.cv || siteLinks.cv,
            email: settings.email || contactDetails.email,
            phone: settings.phone || contactDetails.phone,
          }
        : {}),
    };
  },
  ["public-site-settings"],
  { revalidate: 300, tags: ["public-site-settings"] },
);

export async function getPublicSiteSettings() {
  return loadSiteSettings();
}
