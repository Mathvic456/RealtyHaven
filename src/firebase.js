// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGs1qRjuHV5xRV6097lddnn5br_EmVLko",
  authDomain: "realty-haven.firebaseapp.com",
  projectId: "realty-haven",
  storageBucket: "realty-haven.appspot.com",
  messagingSenderId: "433516834525",
  appId: "1:433516834525:web:d2b061d1b61e79f409b534"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
