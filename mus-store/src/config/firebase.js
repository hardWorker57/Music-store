// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKHWvlgxFGF5fkyPHAXyEnymioevaCIQc",
  authDomain: "mus-store-97412.firebaseapp.com",
  projectId: "mus-store-97412",
  storageBucket: "mus-store-97412.appspot.com",
  messagingSenderId: "97350449178",
  appId: "1:97350449178:web:752305efbf981b5ee179a3",
  measurementId: "G-SVWBGLG7V2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);