import { cities, places } from "@proudly/shared";

export default function AdminPage() {
  return (
    <main className="section">
      <div className="container">
        <span className="badge">Admin preview</span>
        <h2 style={{ marginTop: 18 }}>Platform dashboard</h2>
        <p>Manage cities, listings, safety profiles, booking partners, and editorial guides.</p>
        <div className="grid" style={{ marginTop: 24 }}>
          <div className="card" style={{ padding: 22 }}><h3>{cities.length}</h3><p>Cities</p></div>
          <div className="card" style={{ padding: 22 }}><h3>{places.length}</h3><p>Listings</p></div>
          <div className="card" style={{ padding: 22 }}><h3>Mock</h3><p>Data provider</p></div>
          <div className="card" style={{ padding: 22 }}><h3>Ready</h3><p>Supabase schema</p></div>
        </div>
      </div>
    </main>
  );
}
