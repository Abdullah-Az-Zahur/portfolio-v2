import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/auth/guards";
import { uploadBufferToCloudinary } from "@/lib/cloudinary";

export async function POST(request: Request) {
  const session = await requireAdminSession();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ message: "File is required" }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const uploadResult = await uploadBufferToCloudinary(
    Buffer.from(arrayBuffer),
    formData.get("folder")?.toString() || "portfolio-v2",
  );

  return NextResponse.json(uploadResult, { status: 201 });
}
