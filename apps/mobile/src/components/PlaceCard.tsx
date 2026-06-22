import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import type { Place } from "@proudly/shared";
import { theme } from "../theme";
import { SafetyBadge } from "./SafetyBadge";

export function GradientBlock({ image }: { image: string }) {
  return <View style={{ height: 150, borderRadius: 22, backgroundColor: image.includes("event") ? theme.colors.rose : image.includes("bar") ? theme.colors.purple : theme.colors.gold, opacity: .92 }} />;
}

export function PlaceCard({ place }: { place: Place }) {
  return (
    <Link href={`/place/${place.id}`} asChild>
      <Pressable style={{ backgroundColor: theme.colors.panel, borderRadius: 26, padding: 12, marginBottom: 16, borderWidth: 1, borderColor: "rgba(255,255,255,.1)" }}>
        <GradientBlock image={place.image} />
        <View style={{ paddingTop: 12, gap: 8 }}>
          <SafetyBadge status={place.safety.status} score={place.safety.score} />
          <Text style={{ color: theme.colors.text, fontSize: 20, fontWeight: "900" }}>{place.name}</Text>
          <Text style={{ color: theme.colors.muted }}>{place.neighborhood}, {place.city} · ★ {place.rating}</Text>
          <Text style={{ color: theme.colors.muted, lineHeight: 20 }}>{place.description}</Text>
          <Text style={{ color: theme.colors.text, fontWeight: "900" }}>{place.priceFrom ? `From $${place.priceFrom}` : "Explore"}</Text>
        </View>
      </Pressable>
    </Link>
  );
}
