// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC09efSAUsDVQt_vlug2DHtnJZ897QKFQM",
  authDomain: "todo-app-a6260.firebaseapp.com",
  projectId: "todo-app-a6260",
  storageBucket: "todo-app-a6260.appspot.com",
  messagingSenderId: "625589539279",
  appId: "1:625589539279:web:17a9eca81971a4640982ba",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
