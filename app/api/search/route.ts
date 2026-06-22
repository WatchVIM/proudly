import { NextResponse } from "next/server";
import { provider } from "@proudly/shared";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") ?? undefined;
  const type = searchParams.get("type") ?? undefined;
  const cityId = searchParams.get("city") ?? undefined;
  const results = await provider.searchPlaces({ query, cityId, type: type as any });
  return NextResponse.json({ results });
}
