import { cities, places, sampleTrip } from "./mock-data";
import type { BookingRequest, BookingResponse, Place, SearchFilters, Trip } from "./types";
import { filterSafePlaces, rankPlaces } from "./safety";

export interface ProudlyDataProvider {
  getCities(): Promise<typeof cities>;
  searchPlaces(filters?: SearchFilters): Promise<Place[]>;
  getPlace(id: string): Promise<Place | null>;
  getTrips(userId?: string): Promise<Trip[]>;
  createBooking(input: BookingRequest): Promise<BookingResponse>;
}

export class MockProudlyProvider implements ProudlyDataProvider {
  async getCities() {
    return cities;
  }

  async searchPlaces(filters: SearchFilters = {}) {
    const q = filters.query?.trim().toLowerCase();
    const type = filters.type && filters.type !== "all" ? filters.type : undefined;
    const safety = filters.safety && filters.safety !== "all" ? filters.safety : undefined;

    let results = filterSafePlaces(places);

    if (q) {
      results = results.filter((place) => {
        const haystack = [
          place.name,
          place.city,
          place.country,
          place.neighborhood,
          place.description,
          ...place.categories,
          ...place.amenities,
          ...place.safety.tags
        ].join(" ").toLowerCase();
        return haystack.includes(q);
      });
    }

    if (filters.cityId) {
      results = results.filter((place) => place.cityId === filters.cityId);
    }

    if (type) {
      results = results.filter((place) => place.type === type);
    }

    if (safety) {
      results = results.filter((place) => place.safety.status === safety);
    }

    if (filters.maxPrice) {
      results = results.filter((place) => !place.priceFrom || place.priceFrom <= filters.maxPrice!);
    }

    if (filters.tags?.length) {
      results = results.filter((place) => filters.tags!.every((tag) => place.safety.tags.includes(tag)));
    }

    return rankPlaces(results);
  }

  async getPlace(id: string) {
    return places.find((place) => place.id === id) ?? null;
  }

  async getTrips() {
    return [sampleTrip];
  }

  async createBooking(input: BookingRequest): Promise<BookingResponse> {
    const place = await this.getPlace(input.placeId);
    if (!place) throw new Error("Place not found");

    const base = place.priceFrom ?? 40;
    const total = Math.max(1, input.travelers) * base + 68;

    return {
      id: `booking_${Date.now()}`,
      placeId: input.placeId,
      status: "confirmed",
      total,
      currency: place.currency,
      message: `You're confirmed for ${place.name}. Your booking is protected by Proudly.'s safety-first travel policy.`
    };
  }
}

export const provider = new MockProudlyProvider();
