import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import InputScreen from "@/screens/input-screen/InputScreen";
import { Text } from "react-native";
import Header from "./src/components/header/Header";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <LinearGradient
      colors={["#000", "#943DFF", "#2938DC"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: () => (
              <Header
                textStyle={{ color: "white", fontSize: 20 }}
                style={{ backgroundColor: "transparent" }}
              />
            ),
            contentStyle: { backgroundColor: "transparent", padding: 10 },
          }}
        >
          <Stack.Screen name="inputScreen" component={InputScreen} />
          <Stack.Screen name="outputScreen" component={InputScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </LinearGradient>
  );
}
