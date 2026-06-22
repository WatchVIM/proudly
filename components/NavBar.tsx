import Link from "next/link";

export function NavBar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="logo">Proudly.</Link>
        <nav className="nav-links">
          <Link href="/explore">Explore</Link>
          <Link href="/stays">Stays</Link>
          <Link href="/events">Events</Link>
          <Link href="/nightlife">Nightlife</Link>
          <Link href="/trips">Trips</Link>
          <Link href="/profile">Profile</Link>
        </nav>
        <Link href="/explore" className="btn primary">Start exploring</Link>
      </div>
    </header>
  );
}
