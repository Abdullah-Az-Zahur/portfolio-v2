import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/requireAdmin";
import cloudinary from "@/lib/cloudinary/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File) || !file.type.startsWith("image/")) {
    return NextResponse.json(
      { message: "Please upload an image file." },
      { status: 400 },
    );
  }

  if (file.size > 5 * 1024 * 1024) {
    return NextResponse.json(
      { message: "Images must be 5 MB or smaller." },
      { status: 400 },
    );
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const result = await new Promise<{ secure_url: string; public_id: string }>(
      (resolve, reject) => {
        const upload = cloudinary.uploader.upload_stream(
          { folder: "portfolio-v2/projects", resource_type: "image" },
          (error, value) => {
            if (error || !value) {
              reject(error ?? new Error("Cloudinary upload failed."));
              return;
            }
            resolve(value);
          },
        );
        upload.end(buffer);
      },
    );

    return NextResponse.json({
      url: result.secure_url,
      publicId: result.public_id,
    });
  } catch (error) {
    console.error("Failed to upload project image", error);
    return NextResponse.json(
      { message: "Unable to upload image." },
      { status: 500 },
    );
  }
}
