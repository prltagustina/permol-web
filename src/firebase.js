import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBP878UHDmTm0GuXvRZ5Ue2_PCg-QPXeCQ",
  authDomain: "permol-consultora.firebaseapp.com",
  projectId: "permol-consultora",
  storageBucket: "permol-consultora.appspot.com",
  messagingSenderId: "180003412221",
  appId: "1:180003412221:web:df93ac17fce3ba4eed0694",
  measurementId: "G-Z4NJ7J1F26"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore, serverTimestamp };
