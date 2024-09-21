// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtRinQHouKkeU4C7QObQwfiylrov0UnOU",
  authDomain: "the-souled-store-clone.firebaseapp.com",
  projectId: "the-souled-store-clone",
  storageBucket: "the-souled-store-clone.appspot.com",
  messagingSenderId: "691695257026",
  appId: "1:691695257026:web:eb47d35172c9d85add825b",
  measurementId: "G-MY78TNW9NX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth};