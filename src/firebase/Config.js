// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAvgs9pOEhVooT8npdbCpPjjrY8MeA3Gw",
  authDomain: "third-app-adebe.firebaseapp.com",
  projectId: "third-app-adebe",
  storageBucket: "third-app-adebe.firebasestorage.app",
  messagingSenderId: "103858743275",
  appId: "1:103858743275:web:8e381627033b05c5255bae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);