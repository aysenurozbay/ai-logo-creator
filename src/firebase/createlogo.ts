import { db } from "./config";
import { addDoc, collection } from "firebase/firestore/lite";

export const createLogo = async (prompt: string, logoStyle?: string) => {
  return await addDoc(collection(db, "logoRequests"), {
    prompt,
    logoStyle: logoStyle || null,
    timestamp: Date.now(),
    logoUrl: "../assets/logo-styles/monogram.png",
  });
};
