// Import the functions you need from the SDKs you need
import {getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpSTHZ5cNYYGlJSBnupA-thcmjwSXjgNU",
  authDomain: "vite-contact-c73a6.firebaseapp.com",
  projectId: "vite-contact-c73a6",
  storageBucket: "vite-contact-c73a6.appspot.com",
  messagingSenderId: "1065245504349",
  appId: "1:1065245504349:web:12aba4e8ed24db7a792eb4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);