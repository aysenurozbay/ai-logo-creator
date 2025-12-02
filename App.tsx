import { LinearGradient } from "expo-linear-gradient";

import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <LinearGradient
      colors={["#000", "#943DFF", "#2938DC"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    >
      <AppNavigator />
    </LinearGradient>
  );
}
