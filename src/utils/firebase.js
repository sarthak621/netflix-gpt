
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_OEBwwiSprh-orsD_5mV5kHJA21pGVMc",
  authDomain: "netflixgpt-a8f17.firebaseapp.com",
  projectId: "netflixgpt-a8f17",
  storageBucket: "netflixgpt-a8f17.firebasestorage.app",
  messagingSenderId: "917656175053",
  appId: "1:917656175053:web:3936074abb7eef3d624484"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();