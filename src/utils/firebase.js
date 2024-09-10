// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs-1_p6mYxSeRNAlG52djuhPeta5R5w74",
  authDomain: "netflix-gpt-srinivas.firebaseapp.com",
  projectId: "netflix-gpt-srinivas",
  storageBucket: "netflix-gpt-srinivas.appspot.com",
  messagingSenderId: "496981146446",
  appId: "1:496981146446:web:2346c7b8f1bfe81a7e3c1f",
  measurementId: "G-8XGVK6VBSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth= getAuth();