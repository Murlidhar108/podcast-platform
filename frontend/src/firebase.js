// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIkey,
  authDomain: "thypodcast-project.firebaseapp.com",
  projectId: "thypodcast-project",
  storageBucket: "thypodcast-project.appspot.com",
  messagingSenderId: "997408958843",
  appId: "1:997408958843:web:1f4dae95d4f27ad1bb35de",
  measurementId: "G-8EH86N9JLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;