import type { City, Place, Trip } from "./types";

export const cities: City[] = [
  {
    id: "barcelona",
    name: "Barcelona",
    country: "Spain",
    hero: "gradient-barcelona",
    score: 92,
    tagline: "Beach days, rooftop nights, and open-hearted culture.",
    safetyNotes: "Strong queer nightlife presence with active Pride and inclusive hospitality options.",
    popularFor: ["Nightlife", "Beaches", "Pride", "Design Hotels"],
    coordinates: { lat: 41.3874, lng: 2.1686 }
  },
  {
    id: "mexico-city",
    name: "Mexico City",
    country: "Mexico",
    hero: "gradient-mexico",
    score: 88,
    tagline: "Culture, cuisine, art, and late-night chosen-family energy.",
    safetyNotes: "Large LGBTQIA+ community; neighborhood-by-neighborhood safety context recommended.",
    popularFor: ["Food", "Culture", "Bars", "Museums"],
    coordinates: { lat: 19.4326, lng: -99.1332 }
  },
  {
    id: "new-york",
    name: "New York",
    country: "USA",
    hero: "gradient-newyork",
    score: 91,
    tagline: "A global queer capital with every scene under one skyline.",
    safetyNotes: "Extensive queer nightlife, hotels, arts, Pride history, and neighborhood options.",
    popularFor: ["Ballroom", "Theater", "Clubs", "History"],
    coordinates: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: "bangkok",
    name: "Bangkok",
    country: "Thailand",
    hero: "gradient-bangkok",
    score: 86,
    tagline: "Luxury stays, vibrant nights, temples, and warm hospitality.",
    safetyNotes: "Popular destination with visible queer nightlife; local etiquette still matters.",
    popularFor: ["Luxury", "Nightlife", "Food", "Wellness"],
    coordinates: { lat: 13.7563, lng: 100.5018 }
  },
  {
    id: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    hero: "gradient-lisbon",
    score: 89,
    tagline: "Golden-hour city breaks, coastal escapes, and cozy queer bars.",
    safetyNotes: "Known for welcoming tourism and growing queer culture.",
    popularFor: ["Romance", "Food", "Architecture", "Coast"],
    coordinates: { lat: 38.7223, lng: -9.1393 }
  },
  {
    id: "phoenix",
    name: "Phoenix",
    country: "USA",
    hero: "gradient-phoenix",
    score: 82,
    tagline: "Desert luxury, cocktail lounges, art walks, and warm-weather escapes.",
    safetyNotes: "Queer-friendly pockets across Phoenix, Scottsdale, and Tempe; venue verification recommended.",
    popularFor: ["Desert Resorts", "Cocktails", "Art", "Wellness"],
    coordinates: { lat: 33.4484, lng: -112.0740 }
  }
];

export const places: Place[] = [
  {
    id: "casa-rainbow-barcelona",
    type: "stay",
    name: "Casa Rainbow Boutique Hotel",
    cityId: "barcelona",
    city: "Barcelona",
    country: "Spain",
    neighborhood: "Eixample",
    description: "A stylish LGBTQIA+ owned boutique hotel close to bars, cafés, rooftop dinners, and late-night culture.",
    image: "gradient-hotel-1",
    rating: 4.9,
    reviewCount: 438,
    priceFrom: 158,
    currency: "USD",
    categories: ["Boutique Hotel", "Couples", "Nightlife Nearby"],
    amenities: ["Rooftop Pool", "Free Wi‑Fi", "Breakfast", "Bar", "Airport Transfer"],
    safety: {
      status: "verified",
      score: 96,
      tags: ["lgbtq-owned", "trans-friendly", "gender-neutral", "poc-friendly"],
      verifiedBy: "Proudly. Partner Review",
      lastReviewed: "2026-06-01",
      notes: "Staff training confirmed, gender-neutral service language, and strong queer traveler reviews."
    },
    coordinates: { lat: 41.3927, lng: 2.1649 },
    bookingUrl: "/book/casa-rainbow-barcelona"
  },
  {
    id: "la-federica",
    type: "nightlife",
    name: "La Federica",
    cityId: "barcelona",
    city: "Barcelona",
    country: "Spain",
    neighborhood: "Poble-sec",
    description: "A cozy, community-loved queer bar for cocktails, conversation, and low-pressure nights out.",
    image: "gradient-bar-1",
    rating: 4.8,
    reviewCount: 214,
    currency: "USD",
    categories: ["Bar", "Cocktails", "Community"],
    amenities: ["Cocktails", "Outdoor Seating", "Late Night", "Small Groups"],
    safety: {
      status: "community",
      score: 90,
      tags: ["trans-friendly", "gender-neutral", "poc-friendly"],
      lastReviewed: "2026-05-28",
      notes: "Community-rated as welcoming with a relaxed atmosphere."
    },
    coordinates: { lat: 41.3738, lng: 2.1662 }
  },
  {
    id: "pride-rooftop-party-barcelona",
    type: "event",
    name: "Pride Rooftop Party",
    cityId: "barcelona",
    city: "Barcelona",
    country: "Spain",
    neighborhood: "Eixample",
    description: "Sunset rooftop mixer with DJs, performers, and a curated guest list for travelers and locals.",
    image: "gradient-event-1",
    rating: 4.7,
    reviewCount: 126,
    priceFrom: 42,
    currency: "USD",
    categories: ["Party", "Pride", "Rooftop"],
    amenities: ["DJs", "Performers", "Cocktails", "Ticketed Entry"],
    startsAt: "2026-07-12T20:00:00+02:00",
    endsAt: "2026-07-13T02:00:00+02:00",
    safety: {
      status: "verified",
      score: 94,
      tags: ["trans-friendly", "gender-neutral", "poc-friendly"],
      verifiedBy: "Proudly. Event Partner",
      lastReviewed: "2026-06-12",
      notes: "Partner event with posted conduct policy and trained door staff."
    },
    coordinates: { lat: 41.3911, lng: 2.1650 },
    bookingUrl: "/book/pride-rooftop-party-barcelona"
  },
  {
    id: "zona-rosa-stay",
    type: "stay",
    name: "Zona Rosa Design Stay",
    cityId: "mexico-city",
    city: "Mexico City",
    country: "Mexico",
    neighborhood: "Zona Rosa",
    description: "A design-forward hotel near nightlife, dining, galleries, and queer cultural corridors.",
    image: "gradient-hotel-2",
    rating: 4.7,
    reviewCount: 302,
    priceFrom: 121,
    currency: "USD",
    categories: ["Design Hotel", "Nightlife", "Culture"],
    amenities: ["Rooftop", "Restaurant", "Gym", "Concierge"],
    safety: {
      status: "inclusive",
      score: 87,
      tags: ["trans-friendly", "poc-friendly"],
      lastReviewed: "2026-05-20",
      notes: "Recommended by travelers; formal verification pending."
    },
    coordinates: { lat: 19.427, lng: -99.165 }
  },
  {
    id: "harlem-ballroom-night",
    type: "event",
    name: "Harlem Ballroom Night",
    cityId: "new-york",
    city: "New York",
    country: "USA",
    neighborhood: "Harlem",
    description: "A culture-forward ballroom celebration with categories, music, community, and late-night style.",
    image: "gradient-event-2",
    rating: 4.9,
    reviewCount: 508,
    priceFrom: 35,
    currency: "USD",
    categories: ["Ballroom", "Culture", "Dance"],
    amenities: ["Ticketed Entry", "Accessibility Seating", "Security", "Coat Check"],
    startsAt: "2026-08-20T21:00:00-04:00",
    safety: {
      status: "verified",
      score: 97,
      tags: ["poc-friendly", "trans-friendly", "gender-neutral"],
      verifiedBy: "Community Partner",
      lastReviewed: "2026-06-03",
      notes: "Strong community governance and inclusive conduct policy."
    },
    coordinates: { lat: 40.8116, lng: -73.9465 }
  },
  {
    id: "silom-night-walk",
    type: "experience",
    name: "Silom Queer Night Walk",
    cityId: "bangkok",
    city: "Bangkok",
    country: "Thailand",
    neighborhood: "Silom",
    description: "A guided evening through queer bars, street food, and low-key lounges with a local host.",
    image: "gradient-experience-1",
    rating: 4.8,
    reviewCount: 177,
    priceFrom: 64,
    currency: "USD",
    categories: ["Guided Tour", "Nightlife", "Food"],
    amenities: ["Local Host", "Small Group", "Food Stops", "Safety Briefing"],
    safety: {
      status: "verified",
      score: 91,
      tags: ["trans-friendly", "gender-neutral"],
      verifiedBy: "Proudly. Local Host",
      lastReviewed: "2026-05-12",
      notes: "Small-group guide with traveler safety briefing and route planning."
    },
    coordinates: { lat: 13.728, lng: 100.533 }
  },
  {
    id: "lisbon-fado-after-dark",
    type: "event",
    name: "Fado After Dark: Queer Edition",
    cityId: "lisbon",
    city: "Lisbon",
    country: "Portugal",
    neighborhood: "Bairro Alto",
    description: "A soulful queer culture night blending fado, poetry, cocktails, and community tables.",
    image: "gradient-event-3",
    rating: 4.6,
    reviewCount: 86,
    priceFrom: 28,
    currency: "USD",
    categories: ["Music", "Culture", "Cocktails"],
    amenities: ["Live Music", "Reserved Tables", "Cocktails"],
    safety: {
      status: "community",
      score: 86,
      tags: ["gender-neutral", "poc-friendly"],
      lastReviewed: "2026-04-30",
      notes: "Community-recommended cultural night in a known nightlife neighborhood."
    },
    coordinates: { lat: 38.711, lng: -9.144 }
  },
  {
    id: "desert-prism-retreat",
    type: "stay",
    name: "Desert Prism Retreat",
    cityId: "phoenix",
    city: "Phoenix",
    country: "USA",
    neighborhood: "Scottsdale",
    description: "A calm desert resort stay for couples, spa weekends, pool days, and curated queer-friendly itineraries.",
    image: "gradient-hotel-3",
    rating: 4.6,
    reviewCount: 164,
    priceFrom: 189,
    currency: "USD",
    categories: ["Resort", "Couples", "Wellness"],
    amenities: ["Spa", "Pool", "Private Patio", "Concierge", "Parking"],
    safety: {
      status: "inclusive",
      score: 84,
      tags: ["trans-friendly", "wheelchair-accessible", "poc-friendly"],
      lastReviewed: "2026-06-06",
      notes: "Traveler-recommended for couples and wellness weekends; full verification pending."
    },
    coordinates: { lat: 33.494, lng: -111.926 }
  }
];

export const sampleTrip: Trip = {
  id: "trip-barcelona-pride",
  title: "My Trip to Barcelona",
  cityId: "barcelona",
  startDate: "2026-07-10",
  endDate: "2026-07-14",
  travelers: 2,
  items: [
    {
      id: "trip-item-1",
      placeId: "casa-rainbow-barcelona",
      title: "Check-in at Casa Rainbow",
      date: "2026-07-10",
      time: "3:00 PM",
      status: "confirmed"
    },
    {
      id: "trip-item-2",
      placeId: "pride-rooftop-party-barcelona",
      title: "Pride Rooftop Party",
      date: "2026-07-12",
      time: "8:00 PM",
      status: "confirmed"
    },
    {
      id: "trip-item-3",
      placeId: "la-federica",
      title: "Cocktails at La Federica",
      date: "2026-07-13",
      time: "9:30 PM",
      status: "planned"
    }
  ]
};
