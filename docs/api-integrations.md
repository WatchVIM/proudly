# API Integration Plan

The current app uses `MockProudlyProvider` in `packages/shared/src/providers.ts`.

Replace it with provider classes as partnerships and API keys become available.

## Recommended provider layers

### Travel and Hotels

- Amadeus: flight search, hotel search, availability.
- Expedia Rapid or Booking.com affiliate/partner routes: hotel affiliate booking.
- Booking partner data can be enriched with Proudly. safety ratings.

### Events

- Ticketmaster Discovery API for mainstream ticketed events.
- Eventbrite or local partner feeds for queer community events.
- Manual admin submissions for smaller local events and nightlife.

### Places and Maps

- Google Places for POIs, hours, photos, and reviews.
- Mapbox for mobile/web map UI.
- OpenStreetMap as a supplemental open place layer.

### Payments

- Stripe for subscriptions, concierge planning, booking deposits, or owned event ticketing.

## Important rule

Do not scrape protected travel marketplaces. Use official APIs, affiliate feeds, direct partnerships, or manually approved listings.
