import { ScrollView, Text, View } from "react-native";
import { sampleTrip } from "@proudly/shared";
import { theme } from "../../src/theme";

export default function TripsScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.colors.ink }} contentContainerStyle={{ padding: 18, paddingBottom: 120 }}>
      <Text style={{ color: theme.colors.text, fontSize: 34, fontWeight: "900" }}>{sampleTrip.title}</Text>
      <Text style={{ color: theme.colors.muted, marginVertical: 8 }}>{sampleTrip.startDate} → {sampleTrip.endDate} · {sampleTrip.travelers} travelers</Text>
      <View style={{ height: 190, borderRadius: 24, backgroundColor: theme.colors.purple, marginVertical: 18 }} />
      {sampleTrip.items.map((item) => (
        <View key={item.id} style={{ backgroundColor: theme.colors.panel, padding: 18, borderRadius: 22, marginBottom: 12 }}>
          <Text style={{ color: theme.colors.rose, fontWeight: "900" }}>{item.date} · {item.time}</Text>
          <Text style={{ color: theme.colors.text, fontSize: 20, fontWeight: "900", marginTop: 4 }}>{item.title}</Text>
          <Text style={{ color: theme.colors.muted, marginTop: 4 }}>{item.status}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
