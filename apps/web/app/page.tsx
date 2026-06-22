import Link from "next/link";
import { brand, cities, provider } from "@proudly/shared";
import { PlaceCard } from "../components/PlaceCard";
import { SearchPanel } from "../components/SearchPanel";

export default async function HomePage() {
  const featuredPlaces = (await provider.searchPlaces({})).slice(0, 4);

  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge">✦ Queer-safe travel companion</span>
            <h1>Travel. Stay. Celebrate. <span>Be You.</span> Everywhere.</h1>
            <p className="lead">The global platform for LGBTQIA+ travelers to discover safe places, inclusive stays, nightlife, events, and experiences worldwide.</p>
            <SearchPanel />
            <div className="pill-row" style={{ marginTop: 22 }}>
              <span className="pill">Verified safe</span>
              <span className="pill">Community rated</span>
              <span className="pill">Inclusive stays</span>
              <span className="pill">Trip planner</span>
            </div>
          </div>
          <div className="hero-card" aria-label="Proudly app preview">
            <div className="city-silhouette" />
            <div className="phone-preview">
              <div className="phone-top"><b>Proudly.</b><span>Barcelona</span></div>
              <div className="phone-hero" />
              <h3 style={{ margin: "0 0 8px" }}>Find your next safe scene.</h3>
              <p style={{ color: "var(--muted)", marginTop: 0 }}>Stays, bars, events, and curated local guides.</p>
              <div className="pill-row"><span className="pill">Stays</span><span className="pill">Events</span><span className="pill">Nightlife</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Popular destinations</h2>
              <p>Start with cities that have active queer culture and strong community signals.</p>
            </div>
            <Link className="btn" href="/explore">View all</Link>
          </div>
          <div className="grid">
            {cities.slice(0, 4).map((city) => (
              <Link href={`/explore?city=${city.id}`} className="card destination" key={city.id}>
                <div className={`destination ${city.hero}`} style={{ margin: -18, height: 260 }}>
                  <span className="safety-badge good">Safety Score · {city.score}</span>
                  <h3 style={{ margin: "12px 0 4px", fontSize: "1.35rem" }}>{city.name}</h3>
                  <div className="meta"><span>{city.country}</span><span>{city.popularFor[0]}</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container feature-grid">
          <div className="panel">
            <h2>Built for the LGBTQIA+ travel community.</h2>
            <p>Proudly. combines booking, discovery, safety context, and real traveler signals into one elegant travel layer.</p>
            <div className="feature-list">
              <div className="feature"><b>Safety first</b><br />Every listing is labeled by verification, community reviews, and location context.</div>
              <div className="feature"><b>Real community</b><br />Reviews and tips from queer travelers, couples, groups, and solo explorers.</div>
              <div className="feature"><b>Curated with care</b><br />Handpicked stays, bars, events, tours, and guides that celebrate diversity.</div>
            </div>
          </div>
          <div>
            <div className="section-head"><h2>Featured now</h2><Link className="btn" href="/explore">Explore</Link></div>
            <div className="grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              {featuredPlaces.map((place) => <PlaceCard key={place.id} place={place} />)}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
