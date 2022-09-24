// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getMessaging, getToken } from 'firebase/messaging';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh8d5_2-dl2wCaE1m8_CQNtGkfDvPHvCE",
  authDomain: "forget-me-not-a400e.firebaseapp.com",
  projectId: "forget-me-not-a400e",
  storageBucket: "forget-me-not-a400e.appspot.com",
  messagingSenderId: "894853494754",
  appId: "1:894853494754:web:cd7b661f3f4736ee472bbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
