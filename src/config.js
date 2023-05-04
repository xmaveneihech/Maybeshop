import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_zwtNVAQac0QKOMN6sYx1r1-deQqFM_A",
  authDomain: "maybe-shop-a5bfa.firebaseapp.com",
  projectId: "maybe-shop-a5bfa",
  storageBucket: "maybe-shop-a5bfa.appspot.com",
  messagingSenderId: "723417853882",
  appId: "1:723417853882:web:2cd13745b4d22216197783",
  measurementId: "G-0VDW5ZP75Y",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
