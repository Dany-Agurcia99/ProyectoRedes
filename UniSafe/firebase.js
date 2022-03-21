// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSzUUMS_Dg1DZxQd-EIq47xhZfTXvSxGo",
  authDomain: "unisafe-6c4e1.firebaseapp.com",
  databaseURL: "https://unisafe-6c4e1-default-rtdb.firebaseio.com",
  projectId: "unisafe-6c4e1",
  storageBucket: "unisafe-6c4e1.appspot.com",
  messagingSenderId: "628246806701",
  appId: "1:628246806701:web:52fe3ec96f3955264cc624",
  measurementId: "G-B5KZ61717Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;