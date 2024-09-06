// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getReactNativePersistence } from '@firebase/auth/dist/rn/index.js';

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhfyHQMu5En4kBu_GMUW-vJtubI-jbiKk",
  authDomain: "ai-travel-planner-a68b8.firebaseapp.com",
  projectId: "ai-travel-planner-a68b8",
  storageBucket: "ai-travel-planner-a68b8.appspot.com",
  messagingSenderId: "548888161632",
  appId: "1:548888161632:web:39dbccabd20ef7fbe74205",
  measurementId: "G-4EZCC8M582"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);