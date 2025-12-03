import { LinearGradient } from "expo-linear-gradient";

import AppNavigator from "./src/navigation/AppNavigator";
import { useEffect } from "react";
import { addDoc, collection } from "firebase/firestore/lite";
import { db } from "./src/firebase/config";
import Toast from "react-native-toast-message";
import colors from "./src/constants/colors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();

  useEffect(() => {
    const checkFirebase = async () => {
      try {
        const docRef = await addDoc(collection(db, "connectionTest"), {
          ok: true,
          timestamp: Date.now(),
        });
      } catch (err) {}
    };

    checkFirebase();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LinearGradient
        colors={[colors.black, colors.purple, colors.black]}
        locations={[0, 0.6, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ flex: 1 }}
      >
        <AppNavigator />
        <Toast />
      </LinearGradient>
    </QueryClientProvider>
  );
}
