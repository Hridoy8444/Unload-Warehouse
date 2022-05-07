// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm0fGeJJemQazMKNtrcxr5_OH17yX1pUA",
  authDomain: "bike-warehouse-managemen-ec696.firebaseapp.com",
  projectId: "bike-warehouse-managemen-ec696",
  storageBucket: "bike-warehouse-managemen-ec696.appspot.com",
  messagingSenderId: "996662222807",
  appId: "1:996662222807:web:6002ee5b6ab1056d837592"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;