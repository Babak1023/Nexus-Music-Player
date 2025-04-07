// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLExuHFqWBLwaIU63zLulYzcSxT2-3QLI",
  authDomain: "statswebsite-2cfe7.firebaseapp.com",
  projectId: "statswebsite-2cfe7",
  storageBucket: "statswebsite-2cfe7.firebasestorage.app",
  messagingSenderId: "1052544754057",
  appId: "1:1052544754057:web:ca04bfa3e697fbcb040158",
  measurementId: "G-XSNVBYHWB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);