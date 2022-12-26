// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNZYFRQtbmKUorJjRncM-NnQo4oD-Yd9E",
    authDomain: "visa-plan-f7b5e.firebaseapp.com",
    projectId: "visa-plan-f7b5e",
    storageBucket: "visa-plan-f7b5e.appspot.com",
    messagingSenderId: "365998928183",
    appId: "1:365998928183:web:47d9f34fecd361f5a22ab2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;