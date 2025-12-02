import { LinearGradient } from "expo-linear-gradient";

import AppNavigator from "./src/navigation/AppNavigator";
import { useEffect } from "react";
import { addDoc, collection } from "firebase/firestore/lite";
import { db } from "./src/firebase/config";

export default function App() {
  useEffect(() => {
    const checkFirebase = async () => {
      try {
        const docRef = await addDoc(collection(db, "connectionTest"), {
          ok: true,
          timestamp: Date.now(),
        });

        console.log("Firebase OK! Doc ID:", docRef.id);
      } catch (err) {
        console.log("Firebase Error:", err);
      }
    };

    checkFirebase();
  }, []);

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
