import { useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { places } from "@proudly/shared";
import { theme } from "../../src/theme";

export default function BookingScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const place = places.find((p) => p.id === id) ?? places[0];
  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.colors.ink }} contentContainerStyle={{ padding: 18, paddingBottom: 120 }}>
      <Text style={{ color: theme.colors.text, fontSize: 34, fontWeight: "900" }}>Booking details</Text>
      <Text style={{ color: theme.colors.muted, marginVertical: 10 }}>{place.name}</Text>
      {['Check-in / date', 'Check-out / time', 'Travelers', 'Full name', 'Email'].map((label) => (
        <View key={label} style={{ marginBottom: 14 }}>
          <Text style={{ color: theme.colors.muted, marginBottom: 6 }}>{label}</Text>
          <TextInput placeholder={label} placeholderTextColor={theme.colors.muted} style={{ backgroundColor: theme.colors.panel, color: theme.colors.text, padding: 16, borderRadius: 18 }} />
        </View>
      ))}
      <View style={{ backgroundColor: theme.colors.panel, padding: 18, borderRadius: 22, marginTop: 8 }}>
        <Text style={{ color: theme.colors.text, fontWeight: "900", fontSize: 18 }}>Price estimate</Text>
        <Text style={{ color: theme.colors.muted, marginTop: 8 }}>Base: ${place.priceFrom ?? 40}</Text>
        <Text style={{ color: theme.colors.muted }}>Taxes & fees: $68</Text>
        <Text style={{ color: theme.colors.text, marginTop: 8, fontWeight: "900" }}>Total: ${(place.priceFrom ?? 40) + 68}</Text>
      </View>
      <Pressable style={{ backgroundColor: theme.colors.rose, padding: 18, borderRadius: 18, alignItems: "center", marginTop: 18 }}>
        <Text style={{ color: "white", fontWeight: "900" }}>Request booking</Text>
      </Pressable>
    </ScrollView>
  );
}
