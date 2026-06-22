import { notFound } from "next/navigation";
import { provider } from "@proudly/shared";
import { SafetyBadge } from "../../../components/SafetyBadge";

export default async function BookingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const place = await provider.getPlace(id);
  if (!place) notFound();

  return (
    <main className="section">
      <div className="container feature-grid">
        <div>
          <div className={`place-image ${place.image}`} style={{ borderRadius: 30, height: 360 }} />
          <div style={{ marginTop: 18 }}><SafetyBadge status={place.safety.status} score={place.safety.score} /></div>
          <h2 style={{ marginTop: 18 }}>{place.name}</h2>
          <p>{place.description}</p>
          <div className="feature-list">
            <div className="feature"><b>Location</b><br />{place.neighborhood}, {place.city}, {place.country}</div>
            <div className="feature"><b>Signals</b><br />{place.safety.tags.join(", ")}</div>
            <div className="feature"><b>Notes</b><br />{place.safety.notes}</div>
          </div>
        </div>
        <form className="panel" style={{ padding: 24 }} action="/api/bookings" method="post">
          <input type="hidden" name="placeId" value={place.id} />
          <h3>Reserve or save this place</h3>
          <label>Guest name</label>
          <input name="guestName" placeholder="Your name" required />
          <label>Email</label>
          <input name="guestEmail" type="email" placeholder="you@example.com" required />
          <label>Travelers</label>
          <input name="travelers" type="number" min="1" defaultValue="2" required />
          <button className="btn primary" style={{ width: "100%", marginTop: 18 }}>Continue</button>
          <p>Estimated from {place.priceFrom ? `$${place.priceFrom}` : "$40"} · {place.currency}</p>
        </form>
      </div>
    </main>
  );
}
