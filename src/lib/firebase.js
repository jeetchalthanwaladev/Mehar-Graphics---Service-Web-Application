// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSNjPl5_UIRuTHHLo9Bs05M-Wxn5DL8vM",
  authDomain: "mehar-graphics.firebaseapp.com",
  projectId: "mehar-graphics",
  storageBucket: "mehar-graphics.firebasestorage.app",
  messagingSenderId: "395991184705",
  appId: "1:395991184705:web:2915753c6fb0a1d7299dc0",
  measurementId: "G-3SKRGDG3XG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
