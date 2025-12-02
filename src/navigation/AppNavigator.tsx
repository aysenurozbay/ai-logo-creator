import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";
import Header from "../components/header/Header";
import InputScreen from "../screens/input-screen/InputScreen";
import OutputScreen from "../screens/output-screen/OutputScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
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
          animation: "none",
        }}
      >
        <Stack.Screen name="InputScreen" component={InputScreen} />
        <Stack.Screen name="OutputScreen" component={OutputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
