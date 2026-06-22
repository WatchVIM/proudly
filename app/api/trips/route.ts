import { NextResponse } from "next/server";
import { provider } from "@proudly/shared";

export async function GET() {
  const trips = await provider.getTrips();
  return NextResponse.json({ trips });
}
