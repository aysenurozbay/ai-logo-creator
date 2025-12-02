// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChUdGfB_ZVcHlT00DEeaFKuhQuUWMahV4",
  authDomain: "ai-logo-creator-b6beb.firebaseapp.com",
  projectId: "ai-logo-creator-b6beb",
  storageBucket: "ai-logo-creator-b6beb.firebasestorage.app",
  messagingSenderId: "940602534694",
  appId: "1:940602534694:web:08a45203071cbd1a802fe7",
  measurementId: "G-JSRYWFFQQZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
