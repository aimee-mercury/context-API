// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKmlwaCR-f9Jbqyyu_pBfgS1zCEwdzykc",
  authDomain: "forms-3f6c9.firebaseapp.com",
  projectId: "forms-3f6c9",
  storageBucket: "forms-3f6c9.appspot.com",
  messagingSenderId: "801515128311",
  appId: "1:801515128311:web:edd35f7aa29d0107b4daf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH =getAuth(app)
// export const FIREBASE_DB = getFireStore(app)