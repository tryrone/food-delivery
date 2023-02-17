import { StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import HomePage from "./src/pages/homePage";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Urbanist-Bold": require("./assets/fonts/Urbanist-Bold.ttf"),
    "Urbanist-Medium": require("./assets/fonts/Urbanist-Medium.ttf"),
    "Urbanist-Regular": require("./assets/fonts/Urbanist-Regular.ttf"),
    "Urbanist-SemiBold": require("./assets/fonts/Urbanist-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text style={styles.loading}>Loading...</Text>;
  }

  return <HomePage />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loading: { textAlign: "center", alignSelf: "center" },
});
