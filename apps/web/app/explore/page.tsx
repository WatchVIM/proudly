import { cities, provider, type PlaceType, type SafetyStatus } from "@proudly/shared";
import { PlaceCard } from "../../components/PlaceCard";

export default async function ExplorePage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q : "";
  const type = typeof params.type === "string" ? (params.type as PlaceType | "all") : "all";
  const cityId = typeof params.city === "string" ? params.city : undefined;
  const safety = typeof params.safety === "string" ? (params.safety as SafetyStatus | "all") : "all";
  const results = await provider.searchPlaces({ query: q, type, cityId, safety });

  return (
    <main className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="badge">Explore safe stays, nightlife, events, and experiences</span>
            <h2 style={{ marginTop: 18 }}>Where do you want to feel seen?</h2>
            <p>{results.length} curated results based on Proudly. safety signals.</p>
          </div>
        </div>

        <form className="panel" style={{ display: "grid", gridTemplateColumns: "2fr repeat(3, 1fr) auto", gap: 12, marginBottom: 24 }}>
          <input className="input" name="q" defaultValue={q} placeholder="Search city, venue, hotel, event..." />
          <select className="input" name="city" defaultValue={cityId ?? ""}>
            <option value="">All cities</option>
            {cities.map((city) => <option key={city.id} value={city.id}>{city.name}</option>)}
          </select>
          <select className="input" name="type" defaultValue={type}>
            <option value="all">All types</option>
            <option value="stay">Stays</option>
            <option value="event">Events</option>
            <option value="nightlife">Nightlife</option>
            <option value="experience">Experiences</option>
          </select>
          <select className="input" name="safety" defaultValue={safety}>
            <option value="all">All safety</option>
            <option value="verified">Verified safe</option>
            <option value="community">Community rated</option>
            <option value="inclusive">Inclusive</option>
          </select>
          <button className="btn primary">Search</button>
        </form>

        <div className="grid">
          {results.map((place) => <PlaceCard key={place.id} place={place} />)}
        </div>
      </div>
    </main>
  );
}
