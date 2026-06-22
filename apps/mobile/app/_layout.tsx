import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerStyle: { backgroundColor: "#08111f" }, headerTintColor: "#fff", contentStyle: { backgroundColor: "#08111f" } }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="place/[id]" options={{ title: "Place details" }} />
        <Stack.Screen name="booking/[id]" options={{ title: "Booking" }} />
      </Stack>
    </>
  );
}
