// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// auth import -> step-1
import { getAuth } from "firebase/auth";
// firstore step-1
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYyTvZoFhTAgfIhQEPxTHRunuyDoeEoGk",
    authDomain: "wa-clone-d573c.firebaseapp.com",
    projectId: "wa-clone-d573c",
    storageBucket: "wa-clone-d573c.firebasestorage.app",
    messagingSenderId: "539007820622",
    appId: "1:539007820622:web:b25d793d875d86282e741f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth-step-2
const auth = getAuth(app);
// firestor step-2
const db = getFirestore();
const storage = getStorage();

export { auth, db, storage }

