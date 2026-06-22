import { NextResponse } from "next/server";
import { provider, type PlaceType, type SafetyStatus } from "@proudly/shared";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const results = await provider.searchPlaces({
    query: searchParams.get("q") ?? undefined,
    cityId: searchParams.get("city") ?? undefined,
    type: (searchParams.get("type") as PlaceType | "all" | null) ?? "all",
    safety: (searchParams.get("safety") as SafetyStatus | "all" | null) ?? "all"
  });
  return NextResponse.json({ results });
}
