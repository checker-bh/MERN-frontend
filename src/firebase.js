// // Initialize Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmioHLpKUhd_l8b_UXfVw83-TSbYibgNU",
  authDomain: "mern-ga-project.firebaseapp.com",
  projectId: "mern-ga-project",
  storageBucket: "mern-ga-project.appspot.com",
  messagingSenderId: "975131133512",
  appId: "1:975131133512:web:848cf86d8ca992b6abba7d",
  measurementId: "G-4PNBVLSJD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };