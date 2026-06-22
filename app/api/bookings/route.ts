import { NextResponse } from "next/server";
import { provider } from "@proudly/shared";

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  let input: { placeId: string; guestName: string; guestEmail: string; travelers: number };

  if (contentType.includes("application/json")) {
    const body = await request.json();
    input = {
      placeId: body.placeId,
      guestName: body.guestName,
      guestEmail: body.guestEmail,
      travelers: Number(body.travelers ?? 1)
    };
  } else {
    const form = await request.formData();
    input = {
      placeId: String(form.get("placeId") ?? ""),
      guestName: String(form.get("guestName") ?? ""),
      guestEmail: String(form.get("guestEmail") ?? ""),
      travelers: Number(form.get("travelers") ?? 1)
    };
  }

  const booking = await provider.createBooking(input);
  return NextResponse.json(booking);
}
