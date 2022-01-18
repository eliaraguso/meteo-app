// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeApp } from "firebase";

// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDckqf_fLfaA79ml3hUiQibUefpBqz07II",

  authDomain: "meteoapp-b42b0.firebaseapp.com",

  projectId: "meteoapp-b42b0",

  storageBucket: "meteoapp-b42b0.appspot.com",

  messagingSenderId: "78709118930",

  appId: "1:78709118930:web:4e8f391be1dcdf1e7b1a0b",

  measurementId: "G-TF4EX5R470"

};


// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

export default firebaseApp.firestore();
