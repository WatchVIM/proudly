import Link from "next/link";

export function NavBar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="logo" aria-label="Proudly home">
          <span className="logo-mark" aria-hidden />
          Proudly.
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/explore">Explore</Link>
          <Link href="/stays">Stays</Link>
          <Link href="/events">Events</Link>
          <Link href="/nightlife">Nightlife</Link>
          <Link href="/trips">Trips</Link>
          <Link href="/profile">Profile</Link>
        </nav>
        <div className="nav-actions">
          <Link href="/profile" className="btn ghost">Log in</Link>
          <Link href="/explore" className="btn primary">Start exploring</Link>
        </div>
        <Link href="/explore" className="btn mobile-only">Explore</Link>
      </div>
    </header>
  );
}
