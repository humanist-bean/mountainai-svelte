// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// ALDER'S IMPORTANT NOTE / TODO: Firebase is weird in that it generally doesn't require that 
// we protect API keys which is typically the norm. However if I end up using 
// Firebase ML, then I WILL want to protect my API key with .env !!!
const firebaseConfig = {
  apiKey: "AIzaSyADDZbW75vUHeVXjwWxKVBLI_wM7aL3uxg",
  authDomain: "mountainai.firebaseapp.com",
  projectId: "mountainai",
  storageBucket: "mountainai.appspot.com",
  messagingSenderId: "272961028532",
  appId: "1:272961028532:web:cef804c895aa06164e32e1",
  measurementId: "G-YCM8DB9DLE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// NOTE: analytics causes a "can't find window" error, protecting with 'if window' for now
// source: https://stackoverflow.com/questions/69799682/firebase-analytics-with-next-js-window-not-defined
// TODO: comeback and fix the analytics 
if (app.name && typeof window !== 'undefined') {
    const analytics = getAnalytics(app);
  }
