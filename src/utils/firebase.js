import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPvMjrZYKZYw0bu6Rt0BdN-kdQ7cHkbiE",
  authDomain: "netflix-react-886d7.firebaseapp.com",
  projectId: "netflix-react-886d7",
  storageBucket: "netflix-react-886d7.appspot.com",
  messagingSenderId: "189018752789",
  appId: "1:189018752789:web:49ef33881f6354ef3c8b1c",
  measurementId: "G-PWBMBJ53Y2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);