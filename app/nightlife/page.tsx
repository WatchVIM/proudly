import { provider } from "@proudly/shared";
import { PlaceCard } from "../../components/PlaceCard";

export default async function NightlifePage() {
  const results = await provider.searchPlaces({ type: "nightlife" });
  return (
    <main className="section">
      <div className="container">
        <span className="badge">Nightlife</span>
        <h2 style={{ marginTop: 18 }}>Nightlife and social spaces</h2>
        <p>Find bars, lounges, clubs, rooftops, and late-night scenes.</p>
        <div className="grid" style={{ marginTop: 24 }}>
          {results.map((place) => <PlaceCard key={place.id} place={place} />)}
        </div>
      </div>
    </main>
  );
}
