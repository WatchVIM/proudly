import { Link, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { places } from "@proudly/shared";
import { GradientBlock } from "../../src/components/PlaceCard";
import { SafetyBadge } from "../../src/components/SafetyBadge";
import { theme } from "../../src/theme";

export default function PlaceDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const place = places.find((p) => p.id === id) ?? places[0];
  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.colors.ink }} contentContainerStyle={{ padding: 18, paddingBottom: 120 }}>
      <GradientBlock image={place.image} />
      <View style={{ marginTop: 18, gap: 12 }}>
        <SafetyBadge status={place.safety.status} score={place.safety.score} />
        <Text style={{ color: theme.colors.text, fontSize: 34, lineHeight: 38, fontWeight: "900" }}>{place.name}</Text>
        <Text style={{ color: theme.colors.muted }}>{place.neighborhood}, {place.city} · ★ {place.rating} ({place.reviewCount})</Text>
        <Text style={{ color: theme.colors.muted, lineHeight: 23, fontSize: 16 }}>{place.description}</Text>
        <Text style={{ color: theme.colors.text, fontSize: 22, fontWeight: "900" }}>Safety profile</Text>
        <Text style={{ color: theme.colors.muted, lineHeight: 23 }}>{place.safety.notes}</Text>
        <Link href={`/booking/${place.id}`} asChild>
          <Pressable style={{ backgroundColor: theme.colors.rose, padding: 18, borderRadius: 18, alignItems: "center", marginTop: 10 }}>
            <Text style={{ color: "white", fontWeight: "900" }}>{place.priceFrom ? `Book from $${place.priceFrom}` : "Reserve"}</Text>
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
}
