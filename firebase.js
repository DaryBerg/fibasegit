// Please leave do not modify/add anything into this file 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFgB8vxHJv98PCVs45eSqcgucOaSP9Gp8",
  authDomain: "authentication-prog.firebaseapp.com",
  projectId: "authentication-prog",
  storageBucket: "authentication-prog.appspot.com",
  messagingSenderId: "267949038947",
  appId: "1:267949038947:web:cd5420eef84ed74bd54756"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

//getting the database
export const db = getFirestore(app);