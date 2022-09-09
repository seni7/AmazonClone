// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCsZo6VXG1TOah4X0Pai90vk8lg8vBjmPY",
    authDomain: "clone-97c18.firebaseapp.com",
    projectId: "clone-97c18",
    storageBucket: "clone-97c18.appspot.com",
    messagingSenderId: "719240684927",
    appId: "1:719240684927:web:3c52d1155fe28b114c664a",
    measurementId: "G-RKBRQJSEPK"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { db,auth };