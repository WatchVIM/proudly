import { provider } from "@proudly/shared";
import { PlaceCard } from "../../components/PlaceCard";

export default async function EventsPage() {
  const results = await provider.searchPlaces({ type: "event" });
  return (
    <main className="section">
      <div className="container">
        <span className="badge">Events</span>
        <h2 style={{ marginTop: 18 }}>Upcoming events</h2>
        <p>Discover experiences, festivals, shows, and local gatherings.</p>
        <div className="grid" style={{ marginTop: 24 }}>
          {results.map((place) => <PlaceCard key={place.id} place={place} />)}
        </div>
      </div>
    </main>
  );
}
