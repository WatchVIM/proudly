import { notFound } from "next/navigation";
import { provider } from "@proudly/shared";
import { SafetyBadge } from "../../../components/SafetyBadge";

export default async function BookingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const place = await provider.getPlace(id);
  if (!place) return notFound();

  return (
    <main>
      <div className="container detail-layout">
        <section>
          <div className={`detail-hero place-image ${place.image}`} />
          <div style={{ marginTop: 24 }}>
            <SafetyBadge status={place.safety.status} score={place.safety.score} />
            <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", letterSpacing: "-.06em", lineHeight: .95, margin: "18px 0 10px" }}>{place.name}</h1>
            <p className="lead">{place.description}</p>
            <div className="pill-row">
              {place.categories.map((cat) => <span className="pill" key={cat}>{cat}</span>)}
            </div>
          </div>
          <div className="panel" style={{ marginTop: 24 }}>
            <h2>Safety profile</h2>
            <p>{place.safety.notes}</p>
            <div className="grid" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
              {place.safety.tags.map((tag) => <div className="feature" key={tag}>✦ {tag.replaceAll("-", " ")}</div>)}
            </div>
          </div>
          <div className="panel" style={{ marginTop: 24 }}>
            <h2>Amenities</h2>
            <div className="pill-row">{place.amenities.map((amenity) => <span className="pill" key={amenity}>{amenity}</span>)}</div>
          </div>
        </section>

        <aside className="panel price-box">
          <div className="meta"><span>★ {place.rating} ({place.reviewCount} reviews)</span><span>{place.neighborhood}</span></div>
          <h2>{place.priceFrom ? `$${place.priceFrom}` : "Reserve"}<span style={{ color: "var(--muted)", fontSize: "1rem" }}> {place.priceFrom ? "/ from" : "your spot"}</span></h2>
          <form className="form-grid" action="/api/bookings" method="post">
            <input type="hidden" name="placeId" value={place.id} />
            <label>Start date<input className="input" name="startDate" type="date" /></label>
            <label>End date<input className="input" name="endDate" type="date" /></label>
            <label>Travelers<input className="input" name="travelers" defaultValue="2" /></label>
            <label>Name<input className="input" name="guestName" placeholder="Alex Morgan" /></label>
            <label>Email<input className="input" name="guestEmail" placeholder="alex@email.com" /></label>
            <button className="btn primary" type="submit">Request booking</button>
          </form>
          <p style={{ fontSize: ".86rem" }}>Mock checkout: connect Stripe or booking partner before taking payments.</p>
        </aside>
      </div>
    </main>
  );
}
