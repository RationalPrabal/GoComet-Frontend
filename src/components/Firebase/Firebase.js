// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoTQIB9TyJUljtUISLN0yfYtSPxTR23no",
  authDomain: "gocomet-4a40a.firebaseapp.com",
  projectId: "gocomet-4a40a",
  storageBucket: "gocomet-4a40a.appspot.com",
  messagingSenderId: "344925070068",
  appId: "1:344925070068:web:fb1ca42bcb90e41b0e74a1",
  measurementId: "G-VFD7XKSE63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth, provider}