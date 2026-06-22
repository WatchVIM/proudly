import { provider, places } from "@proudly/shared";

export default async function TripsPage() {
  const [trip] = await provider.getTrips();
  return (
    <main className="section">
      <div className="container">
        <span className="badge">Trip planner</span>
        <h2 style={{ marginTop: 18 }}>{trip.title}</h2>
        <p>{trip.startDate} → {trip.endDate} · {trip.travelers} travelers</p>
        <div className="detail-layout">
          <div className="panel">
            <h2>Itinerary</h2>
            <div className="feature-list">
              {trip.items.map((item) => {
                const place = places.find((p) => p.id === item.placeId);
                return (
                  <div className="feature" key={item.id}>
                    <b>{item.date} · {item.time}</b>
                    <h3>{item.title}</h3>
                    <p>{place?.neighborhood}, {place?.city} · {item.status}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="panel">
            <h2>Map preview</h2>
            <div style={{ height: 420, borderRadius: 24, background: "radial-gradient(circle at 35% 35%, rgba(140,92,255,.5), transparent 12rem), radial-gradient(circle at 70% 60%, rgba(255,79,154,.45), transparent 10rem), rgba(255,255,255,.06)", border: "1px solid var(--line)", position: "relative" }}>
              {trip.items.map((item, index) => <span key={item.id} className="badge" style={{ position: "absolute", top: 60 + index*90, left: 70 + index*52 }}>Pin {index + 1}</span>)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
