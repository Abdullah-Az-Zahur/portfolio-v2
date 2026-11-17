import { NextResponse } from "next/server";
import { getPublicSiteSettings } from "@/lib/site/getPublicSiteSettings";

export async function GET() {
  try {
    return NextResponse.json(await getPublicSiteSettings());
  } catch {
    return NextResponse.json(
      { message: "Unable to load site settings." },
      { status: 500 },
    );
  }
}
