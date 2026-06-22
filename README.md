# Proudly.

**Proudly.** is a full-stack starter for a queer-safe travel, stays, nightlife, events, and trip-planning platform.

This repository is organized as a monorepo:

- `apps/web` — Next.js website and API routes, ready for Vercel.
- `apps/mobile` — Expo / React Native mobile app.
- `packages/shared` — shared TypeScript types, mock data, provider interfaces, and safety scoring logic.
- `supabase` — database schema and seed data for a production backend.
- `docs` — deployment, integrations, roadmap, and safety/privacy notes.

## What is included

- Premium responsive web homepage.
- Explore/search flow for stays, events, nightlife, experiences, and city guides.
- Place detail and mock booking flow.
- Trip planner and profile pages.
- Expo mobile app with explore, trips, saved, profile, place detail, and booking screens.
- API routes using shared provider interfaces.
- Mock data for Barcelona, Mexico City, New York, Bangkok, Lisbon, and Phoenix.
- Supabase schema with Row Level Security starter policies.
- Environment variable templates for Supabase, Amadeus, Ticketmaster, Eventbrite, Google Places, Mapbox, Stripe, Booking/Expedia affiliate integrations.

## Local setup

```bash
pnpm install
cp .env.example .env.local
pnpm dev:web
```

Open the website at `http://localhost:3000`.

To run the mobile app:

```bash
pnpm dev:mobile
```

## Deploy web to Vercel

1. Push this folder to GitHub.
2. Create a new Vercel project from the GitHub repository.
3. Use the repository root as the project root.
4. Keep the build command as `pnpm --filter @proudly/web build`.
5. Add the environment variables from `.env.example` in Vercel.
6. Deploy.

Vercel supports deploying projects from GitHub with automatic deployments after pushes. The web app uses Next.js App Router, route handlers, and server/client components.

## Production data plan

The starter runs on mock data now. Production should replace the mock provider with:

- Supabase for users, reviews, saved places, trips, bookings, safety reports, partner listings, and admin approval.
- Amadeus or travel affiliate APIs for flights and hotel search.
- Ticketmaster / Eventbrite / local venue partner feeds for events.
- Google Places / Mapbox / OpenStreetMap for global venue discovery and maps.
- Stripe for premium memberships, booking deposits, or paid concierge planning.

## Safety language

Do not promise that a place is “100% safe.” Proudly. uses trust language such as:

- Verified Safe
- Community Rated
- Inclusive Stay
- Use Caution
- Not Currently Recommended

This protects users while also lowering platform legal risk.
