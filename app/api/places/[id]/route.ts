import { NextResponse } from "next/server";
import { provider } from "@proudly/shared";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const place = await provider.getPlace(id);
  if (!place) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(place);
}
