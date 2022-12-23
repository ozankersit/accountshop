// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyC4cZJWnyJG992ZR7yF1lWbTZy1UPaRuyk",
  authDomain: "accountshop-ba42e.firebaseapp.com",
  projectId: "accountshop-ba42e",
  storageBucket: "accountshop-ba42e.appspot.com",
  messagingSenderId: "577437151547",
  appId: "1:577437151547:web:ae53f84236c3ac363c871e",
  measurementId: "G-W1CMKHLJM8"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()
export default firebaseConfig
export { auth, db }