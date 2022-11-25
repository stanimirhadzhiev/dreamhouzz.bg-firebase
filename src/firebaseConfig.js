import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVr7hSiu5R2FLtDPvYRZX5I6A0-4x0Qi4",
  authDomain: "dreamhouzz-2c495.firebaseapp.com",
  projectId: "dreamhouzz-2c495",
  storageBucket: "dreamhouzz-2c495.appspot.com",
  messagingSenderId: "935484199269",
  appId: "1:935484199269:web:2b1b92bbc9976737c6118c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);