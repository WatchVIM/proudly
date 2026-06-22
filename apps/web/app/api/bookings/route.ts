import { NextResponse } from "next/server";
import { provider } from "@proudly/shared";

async function parseInput(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) return request.json();
  const form = await request.formData();
  return Object.fromEntries(form.entries());
}

export async function POST(request: Request) {
  try {
    const raw = await parseInput(request);
    const booking = await provider.createBooking({
      placeId: String(raw.placeId),
      startDate: raw.startDate ? String(raw.startDate) : undefined,
      endDate: raw.endDate ? String(raw.endDate) : undefined,
      travelers: Number(raw.travelers ?? 1),
      guestName: String(raw.guestName ?? "Guest"),
      guestEmail: String(raw.guestEmail ?? "guest@example.com")
    });

    return NextResponse.json({ booking });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Booking failed" }, { status: 400 });
  }
}
