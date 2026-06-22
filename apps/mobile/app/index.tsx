import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { brand } from "@proudly/shared";
import { theme } from "../src/theme";

export default function WelcomeScreen() {
  return (
    <LinearGradient colors={["#08111f", "#291642", "#08111f"]} style={{ flex: 1, padding: 24, justifyContent: "flex-end" }}>
      <View style={{ marginBottom: 70 }}>
        <Text style={{ color: theme.colors.text, fontSize: 28, fontWeight: "900", marginBottom: 20 }}>♡ Proudly.</Text>
        <Text style={{ color: theme.colors.text, fontSize: 54, lineHeight: 56, fontWeight: "900", letterSpacing: -2 }}>{brand.tagline}</Text>
        <Text style={{ color: theme.colors.muted, fontSize: 18, lineHeight: 28, marginTop: 18 }}>Find queer-safe places, stays, nightlife, events, and experiences worldwide.</Text>
        <Link href="/(tabs)/explore" asChild>
          <Pressable style={{ backgroundColor: theme.colors.rose, padding: 18, borderRadius: 18, marginTop: 30, alignItems: "center" }}>
            <Text style={{ color: "white", fontWeight: "900", fontSize: 16 }}>Get started</Text>
          </Pressable>
        </Link>
      </View>
    </LinearGradient>
  );
}
