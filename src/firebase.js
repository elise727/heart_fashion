// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBALJ9MZHnu0jerZP_M6TT0JEey-0j_4R4",
  authDomain: "heartfashion-9a2a7.firebaseapp.com",
  projectId: "heartfashion-9a2a7",
  storageBucket: "heartfashion-9a2a7.appspot.com",
  messagingSenderId: "567849370695",
  appId: "1:567849370695:web:87f28dce00f6aa799d5d62",
  measurementId: "G-RNWE3ZVQ2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app)