// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";

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

// Initialize and Export Firebase app, auth, and database (Firestore)
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

// Define and Export Database Access Functions

export async function uploadImage(upload_details){
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// Get uploaded mountain images and their data
export async function getUploads(uid){
  const user_uploads_query = query(collection(db, "uploaded-images"), where("uid", "==", uid));
  const querySnapshot = await getDocs(user_uploads_query);
  // Return an array of the docs in the collection
  return querySnapshot.docs;
}

// NOTE: analytics causes a "can't find window" error, protecting with 'if window' for now
// source: https://stackoverflow.com/questions/69799682/firebase-analytics-with-next-js-window-not-defined
// TODO: comeback and fix the analytics 
if (app.name && typeof window !== 'undefined') {
    const analytics = getAnalytics(app);
  }


