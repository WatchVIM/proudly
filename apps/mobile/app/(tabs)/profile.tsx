import { ScrollView, Text, View } from "react-native";
import { theme } from "../../src/theme";

const prefs = ["Couple", "Nightlife", "Culture", "Trans-friendly", "POC-friendly", "Boutique stays"];

export default function ProfileScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.colors.ink }} contentContainerStyle={{ padding: 18, paddingBottom: 120 }}>
      <View style={{ alignItems: "center", marginVertical: 24 }}>
        <View style={{ width: 92, height: 92, borderRadius: 46, backgroundColor: theme.colors.rose, marginBottom: 14 }} />
        <Text style={{ color: theme.colors.text, fontSize: 28, fontWeight: "900" }}>Alex Morgan</Text>
        <Text style={{ color: theme.colors.muted }}>Member since Jun 2026</Text>
      </View>
      <Text style={{ color: theme.colors.text, fontSize: 22, fontWeight: "900", marginBottom: 12 }}>Safety preferences</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
        {prefs.map((pref) => <Text key={pref} style={{ color: theme.colors.text, backgroundColor: theme.colors.panel, paddingHorizontal: 14, paddingVertical: 10, borderRadius: 999 }}>{pref}</Text>)}
      </View>
    </ScrollView>
  );
}
