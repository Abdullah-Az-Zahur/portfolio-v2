import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb/connect";
import { requireAdmin } from "@/lib/auth/requireAdmin";
import { SiteSettings } from "@/models/settings/SiteSettings";
import { contactDetails, siteLinks } from "@/shared/data/siteLinks";

const editableKeys = [
  "github",
  "linkedin",
  "facebook",
  "youtube",
  "twitter",
  "instagram",
  "resume",
  "cv",
  "email",
  "phone",
] as const;

const defaults = { ...siteLinks, ...contactDetails };

export async function GET() {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  try {
    await connectToDatabase();
    const settings = await SiteSettings.findOne({ key: "site-links" })
      .lean()
      .exec();
    return NextResponse.json({
      ...defaults,
      ...(settings ?? {}),
    });
  } catch {
    return NextResponse.json(
      { message: "Unable to load site settings." },
      { status: 500 },
    );
  }
}

export async function PUT(request: Request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const values = Object.fromEntries(
      editableKeys.map((key) => [
        key,
        typeof body[key] === "string" ? body[key].trim() : "",
      ]),
    );

    if (Object.values(values).some((value) => !value)) {
      return NextResponse.json(
        { message: "All site link and contact fields are required." },
        { status: 400 },
      );
    }

    await connectToDatabase();
    const settings = await SiteSettings.findOneAndUpdate(
      { key: "site-links" },
      { $set: values, $setOnInsert: { key: "site-links" } },
      { new: true, upsert: true, runValidators: true, lean: true },
    ).exec();

    revalidateTag("public-site-settings", "max");
    return NextResponse.json(settings);
  } catch {
    return NextResponse.json(
      { message: "Unable to save site settings." },
      { status: 500 },
    );
  }
}
