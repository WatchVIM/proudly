import { places } from "@proudly/shared";
import { SafetyBadge } from "../../components/SafetyBadge";

export default function AdminPage() {
  return (
    <main className="section">
      <div className="container">
        <span className="badge">Admin review</span>
        <h2 style={{ marginTop: 18 }}>Partner listing moderation</h2>
        <p>Use this page as the starting point for approving venues, hotels, event partners, and safety reports.</p>
        <div className="panel" style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead><tr><th align="left">Listing</th><th align="left">Type</th><th align="left">City</th><th align="left">Safety</th><th align="left">Action</th></tr></thead>
            <tbody>
              {places.map((place) => (
                <tr key={place.id} style={{ borderTop: "1px solid var(--line)" }}>
                  <td style={{ padding: 14 }}>{place.name}</td>
                  <td>{place.type}</td>
                  <td>{place.city}</td>
                  <td><SafetyBadge status={place.safety.status} score={place.safety.score} /></td>
                  <td><button className="btn">Review</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
