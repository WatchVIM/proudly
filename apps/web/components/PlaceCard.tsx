import Link from "next/link";
import type { Place } from "@proudly/shared";
import { SafetyBadge } from "./SafetyBadge";

export function PlaceCard({ place }: { place: Place }) {
  return (
    <Link className="card" href={`/book/${place.id}`}>
      <div className={`place-image ${place.image}`} />
      <div className="card-body">
        <SafetyBadge status={place.safety.status} score={place.safety.score} />
        <h3 className="card-title" style={{ marginTop: 12 }}>{place.name}</h3>
        <div className="meta"><span>{place.neighborhood}, {place.city}</span><span>★ {place.rating}</span></div>
        <p style={{ color: "var(--muted)", minHeight: 72 }}>{place.description}</p>
        <div className="meta"><b>{place.type.toUpperCase()}</b>{place.priceFrom ? <b>From ${place.priceFrom}</b> : <b>Explore</b>}</div>
      </div>
    </Link>
  );
}
