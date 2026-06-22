import { safetyLabel, safetyTone, type SafetyStatus } from "@proudly/shared";

export function SafetyBadge({ status, score }: { status: SafetyStatus; score?: number }) {
  return (
    <span className={`safety-badge ${safetyTone(status)}`}>
      ✦ {safetyLabel(status)}{typeof score === "number" ? ` · ${score}` : ""}
    </span>
  );
}
