import type { Place, SafetyStatus } from "./types";

export function safetyLabel(status: SafetyStatus) {
  switch (status) {
    case "verified":
      return "Verified Safe";
    case "community":
      return "Community Rated";
    case "inclusive":
      return "Inclusive Stay";
    case "caution":
      return "Use Caution";
    case "not_recommended":
      return "Not Recommended";
    default:
      return "Safety Profile";
  }
}

export function safetyTone(status: SafetyStatus) {
  switch (status) {
    case "verified":
      return "excellent";
    case "community":
      return "good";
    case "inclusive":
      return "good";
    case "caution":
      return "caution";
    case "not_recommended":
      return "danger";
  }
}

export function rankPlaces(places: Place[]) {
  return [...places].sort((a, b) => {
    const scoreDiff = b.safety.score - a.safety.score;
    if (scoreDiff !== 0) return scoreDiff;
    return b.rating - a.rating;
  });
}

export function filterSafePlaces(places: Place[]) {
  return places.filter((place) => place.safety.status !== "not_recommended");
}
