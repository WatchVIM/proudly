export default function ProfilePage() {
  return (
    <main className="section">
      <div className="container feature-grid">
        <div>
          <span className="badge">Profile</span>
          <h2 style={{ marginTop: 18 }}>Personalize your travel style</h2>
          <p>Set trip preferences, save favorite places, and choose the signals that matter most to you.</p>
        </div>
        <div className="panel" style={{ padding: 24 }}>
          <h3>Starter profile</h3>
          <div className="feature-list">
            <div className="feature"><b>Traveler type</b><br />Solo, couple, friends, group, or business.</div>
            <div className="feature"><b>Priorities</b><br />Hotels, nightlife, events, restaurants, guides, and experiences.</div>
            <div className="feature"><b>Privacy first</b><br />Identity fields are optional and can be hidden or deleted.</div>
          </div>
        </div>
      </div>
    </main>
  );
}
