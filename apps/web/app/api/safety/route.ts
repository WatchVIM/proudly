import { NextResponse } from "next/server";
import { places } from "@proudly/shared";

export async function GET() {
  const summary = places.map((place) => ({
    id: place.id,
    name: place.name,
    city: place.city,
    status: place.safety.status,
    score: place.safety.score,
    tags: place.safety.tags,
    lastReviewed: place.safety.lastReviewed
  }));
  return NextResponse.json({ summary });
}
