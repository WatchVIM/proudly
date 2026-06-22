import { provider } from "@proudly/shared";

export default async function TripsPage() {
  const trips = await provider.getTrips();
  return (
    <main className="section">
      <div className="container">
        <span className="badge">Trip planner</span>
        <h2 style={{ marginTop: 18 }}>Saved trips</h2>
        <p>Plan stays, events, nightlife, and experiences in one place.</p>
        <div className="grid" style={{ marginTop: 24 }}>
          {trips.map((trip) => (
            <div className="card" key={trip.id} style={{ padding: 22 }}>
              <h3>{trip.title}</h3>
              <p>{trip.startDate} to {trip.endDate} · {trip.travelers} travelers</p>
              <div className="feature-list">
                {trip.items.map((item) => <div className="feature" key={item.id}><b>{item.title}</b><br />{item.date} · {item.time} · {item.status}</div>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
