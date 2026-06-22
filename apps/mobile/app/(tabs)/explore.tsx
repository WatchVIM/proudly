import { ScrollView, Text, TextInput, View } from "react-native";
import { cities, places } from "@proudly/shared";
import { PlaceCard } from "../../src/components/PlaceCard";
import { theme } from "../../src/theme";

export default function ExploreScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.colors.ink }} contentContainerStyle={{ padding: 18, paddingBottom: 120 }}>
      <Text style={{ color: theme.colors.text, fontSize: 32, fontWeight: "900", marginBottom: 8 }}>Hey there. Where to next?</Text>
      <Text style={{ color: theme.colors.muted, lineHeight: 22 }}>Search queer-safe destinations, stays, events, nightlife, and experiences.</Text>
      <TextInput placeholder="Search Barcelona, rooftop, hotel..." placeholderTextColor={theme.colors.muted} style={{ backgroundColor: theme.colors.panel, color: theme.colors.text, padding: 16, borderRadius: 18, marginTop: 18, marginBottom: 18 }} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 18 }}>
        {cities.map((city) => <View key={city.id} style={{ backgroundColor: theme.colors.panelSoft, padding: 14, borderRadius: 18, marginRight: 10 }}><Text style={{ color: theme.colors.text, fontWeight: "900" }}>{city.name}</Text><Text style={{ color: theme.colors.muted }}>Score {city.score}</Text></View>)}
      </ScrollView>
      {places.map((place) => <PlaceCard key={place.id} place={place} />)}
    </ScrollView>
  );
}
