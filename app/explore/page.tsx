import { provider } from "@proudly/shared";
import { PlaceCard } from "../../components/PlaceCard";

export default async function ExplorePage() {
  const results = await provider.searchPlaces({});
  return (
    <main className="section">
      <div className="container">
        <span className="badge">Explore</span>
        <h2 style={{ marginTop: 18 }}>Find places, stays, events, and nightlife</h2>
        <p>{results.length} curated results available now.</p>
        <div className="grid" style={{ marginTop: 24 }}>
          {results.map((place) => <PlaceCard key={place.id} place={place} />)}
        </div>
      </div>
    </main>
  );
}
