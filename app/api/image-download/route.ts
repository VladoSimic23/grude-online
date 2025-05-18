import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const src = searchParams.get("src");

  if (!src) {
    return new NextResponse("Image source missing", { status: 400 });
  }

  try {
    const imageRes = await fetch(src);
    const contentType = imageRes.headers.get("content-type") || "image/jpeg";
    const buffer = await imageRes.arrayBuffer();

    return new NextResponse(Buffer.from(buffer), {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${src.split("/").pop()}"`,
      },
    });
  } catch (error) {
    return new NextResponse(`Failed to fetch image ${error}`, { status: 500 });
  }
}
