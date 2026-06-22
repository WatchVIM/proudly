export default function ProfilePage() {
  const prefs = ["Couple travel", "Trans-friendly priority", "POC-friendly", "Nightlife", "Culture", "Boutique stays", "Gender-neutral spaces"];
  return (
    <main className="section">
      <div className="container detail-layout">
        <section className="panel">
          <span className="badge">Traveler profile</span>
          <h2 style={{ marginTop: 18 }}>Alex Morgan</h2>
          <p>Member since June 2026 · 18 trips · 56 saved places</p>
          <div className="pill-row">{prefs.map((p) => <span className="pill" key={p}>{p}</span>)}</div>
        </section>
        <aside className="panel">
          <h2>Privacy controls</h2>
          <div className="feature-list">
            <div className="feature"><b>Private profile</b><br />Hide traveler identity and preferences from public reviews.</div>
            <div className="feature"><b>Location off by default</b><br />Use destination search without constant tracking.</div>
            <div className="feature"><b>Delete data</b><br />Production app should support account/data deletion workflows.</div>
          </div>
        </aside>
      </div>
    </main>
  );
}
