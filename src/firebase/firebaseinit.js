import firebase from "firebase/app";
import "firebase/firestore";

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

export default firebaseApp.firestore();
