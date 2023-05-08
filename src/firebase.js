// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBegOh8sAiYjUjlJxb20PW0NxVMCgVaA90",
  authDomain: "react-contact-47bf0.firebaseapp.com",
  projectId: "react-contact-47bf0",
  storageBucket: "react-contact-47bf0.appspot.com",
  messagingSenderId: "388048275103",
  appId: "1:388048275103:web:3870454248e18f1a4c04aa"
};

// Initialize Firebase
const FireDb = firebase.initializeApp(firebaseConfig);
export default FireDb.database().ref();