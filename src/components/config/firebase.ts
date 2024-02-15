// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr3BxYgaM4MjxGDsrLGbZI92BQ325kebE",
  authDomain: "masssvuwebsite.firebaseapp.com",
  projectId: "masssvuwebsite",
  storageBucket: "masssvuwebsite.appspot.com",
  messagingSenderId: "783579453866",
  appId: "1:783579453866:web:571f5bbf996fb0a8cc73d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();