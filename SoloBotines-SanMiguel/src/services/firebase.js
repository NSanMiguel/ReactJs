// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "proyectoreact-9bfde.firebaseapp.com",
  projectId: "proyectoreact-9bfde",
  storageBucket: "proyectoreact-9bfde.appspot.com",
  messagingSenderId: "441432394850",
  appId: "1:441432394850:web:36a18cc2434dfb208dd53b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export default db