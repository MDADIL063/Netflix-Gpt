// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxkYOo7HbA4wj-6fkCYtqAUYuctj_b72s",
  authDomain: "netflixgpt-3a1c1.firebaseapp.com",
  projectId: "netflixgpt-3a1c1",
  storageBucket: "netflixgpt-3a1c1.appspot.com",
  messagingSenderId: "425792902109",
  appId: "1:425792902109:web:0450eb604408a4cb5a9c34",
  measurementId: "G-VSBCNEQWTL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
