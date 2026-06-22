export type PlaceType = "stay" | "nightlife" | "event" | "experience" | "guide" | "flight";

export type SafetyStatus = "verified" | "community" | "inclusive" | "caution" | "not_recommended";

export type TravelerType = "solo" | "couple" | "friends" | "group" | "business";

export type SafetyPreference =
  | "lgbtq-owned"
  | "trans-friendly"
  | "gender-neutral"
  | "women-owned"
  | "poc-friendly"
  | "wheelchair-accessible"
  | "sober-friendly";

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface City {
  id: string;
  name: string;
  country: string;
  hero: string;
  score: number;
  tagline: string;
  safetyNotes: string;
  popularFor: string[];
  coordinates: Coordinates;
}

export interface SafetyProfile {
  status: SafetyStatus;
  score: number;
  tags: SafetyPreference[];
  verifiedBy?: string;
  lastReviewed: string;
  notes: string;
}

export interface Place {
  id: string;
  type: PlaceType;
  name: string;
  cityId: string;
  city: string;
  country: string;
  neighborhood: string;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
  priceFrom?: number;
  currency: string;
  categories: string[];
  amenities: string[];
  safety: SafetyProfile;
  coordinates: Coordinates;
  bookingUrl?: string;
  startsAt?: string;
  endsAt?: string;
}

export interface TripItem {
  id: string;
  placeId: string;
  title: string;
  date: string;
  time: string;
  status: "planned" | "confirmed" | "cancelled";
}

export interface Trip {
  id: string;
  title: string;
  cityId: string;
  startDate: string;
  endDate: string;
  travelers: number;
  items: TripItem[];
}

export interface SearchFilters {
  query?: string;
  cityId?: string;
  type?: PlaceType | "all";
  maxPrice?: number;
  safety?: SafetyStatus | "all";
  tags?: SafetyPreference[];
}

export interface BookingRequest {
  placeId: string;
  startDate?: string;
  endDate?: string;
  travelers: number;
  guestName: string;
  guestEmail: string;
}

export interface BookingResponse {
  id: string;
  placeId: string;
  status: "pending" | "confirmed";
  total: number;
  currency: string;
  message: string;
}
