import { Text, View } from "react-native";
import { safetyLabel, type SafetyStatus } from "@proudly/shared";
import { theme } from "../theme";

export function SafetyBadge({ status, score }: { status: SafetyStatus; score?: number }) {
  return (
    <View style={{ alignSelf: "flex-start", borderWidth: 1, borderColor: "rgba(255,255,255,.14)", borderRadius: 999, paddingHorizontal: 10, paddingVertical: 7, backgroundColor: "rgba(255,255,255,.08)" }}>
      <Text style={{ color: status === "verified" ? theme.colors.green : theme.colors.aqua, fontWeight: "800", fontSize: 12 }}>✦ {safetyLabel(status)}{score ? ` · ${score}` : ""}</Text>
    </View>
  );
}
