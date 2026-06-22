import { provider } from "@proudly/shared";
import { PlaceCard } from "../../components/PlaceCard";

export default async function Page() {
  const results = await provider.searchPlaces({ type: "stay" });
  return (
    <main className="section">
      <div className="container">
        <span className="badge">Proudly. curated</span>
        <h2 style={{ marginTop: 18 }}>Inclusive stays</h2>
        <p>Verified and community-rated options for travelers who want to feel welcome.</p>
        <div className="grid" style={{ marginTop: 24 }}>
          {results.map((place) => <PlaceCard key={place.id} place={place} />)}
        </div>
      </div>
    </main>
  );
}
