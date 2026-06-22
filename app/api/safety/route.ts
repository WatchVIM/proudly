import { NextResponse } from "next/server";
import { cities, places } from "@proudly/shared";

export async function GET() {
  return NextResponse.json({
    cities: cities.map((city) => ({ id: city.id, name: city.name, score: city.score, notes: city.safetyNotes })),
    listings: places.map((place) => ({ id: place.id, name: place.name, status: place.safety.status, score: place.safety.score, tags: place.safety.tags }))
  });
}
