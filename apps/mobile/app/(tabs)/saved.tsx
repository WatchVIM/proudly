import { ScrollView, Text } from "react-native";
import { places } from "@proudly/shared";
import { PlaceCard } from "../../src/components/PlaceCard";
import { theme } from "../../src/theme";

export default function SavedScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.colors.ink }} contentContainerStyle={{ padding: 18, paddingBottom: 120 }}>
      <Text style={{ color: theme.colors.text, fontSize: 34, fontWeight: "900", marginBottom: 18 }}>Saved places</Text>
      {places.slice(0, 3).map((place) => <PlaceCard key={place.id} place={place} />)}
    </ScrollView>
  );
}
