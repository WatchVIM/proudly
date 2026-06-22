import { Tabs } from "expo-router";
import { theme } from "../../src/theme";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      headerStyle: { backgroundColor: theme.colors.ink },
      headerTintColor: theme.colors.text,
      tabBarStyle: { backgroundColor: theme.colors.ink, borderTopColor: "rgba(255,255,255,.12)" },
      tabBarActiveTintColor: theme.colors.rose,
      tabBarInactiveTintColor: theme.colors.muted
    }}>
      <Tabs.Screen name="explore" options={{ title: "Explore", tabBarIcon: () => null }} />
      <Tabs.Screen name="trips" options={{ title: "Trips", tabBarIcon: () => null }} />
      <Tabs.Screen name="saved" options={{ title: "Saved", tabBarIcon: () => null }} />
      <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon: () => null }} />
    </Tabs>
  );
}
