import Link from "next/link";

export function SearchPanel() {
  return (
    <form className="search-card" action="/explore">
      <div className="field">
        <label htmlFor="q">Where to?</label>
        <input id="q" name="q" placeholder="Barcelona, hotel, rooftop, Pride..." />
      </div>
      <div className="field">
        <label htmlFor="type">Explore</label>
        <select id="type" name="type" defaultValue="all">
          <option value="all">Everything</option>
          <option value="stay">Stays</option>
          <option value="event">Events</option>
          <option value="nightlife">Nightlife</option>
          <option value="experience">Experiences</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="travelers">Travelers</label>
        <input id="travelers" name="travelers" defaultValue="2 travelers" />
      </div>
      <button className="btn primary" type="submit">Search</button>
    </form>
  );
}
