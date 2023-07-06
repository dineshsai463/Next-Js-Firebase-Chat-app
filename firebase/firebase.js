import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBpYEE-h2e603fJo_Aff0mUOFLi-5zBi74",
    authDomain: "next-js-chat-app-129f8.firebaseapp.com",
    projectId: "next-js-chat-app-129f8",
    storageBucket: "next-js-chat-app-129f8.appspot.com",
    messagingSenderId: "549053501149",
    appId: "1:549053501149:web:cd49defb89c26107019534"
  };
  
  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);