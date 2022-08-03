import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Portable database
const firebaseConfig = {
    apiKey: "AIzaSyBC3VD7JhMF875OvppE0XpWn62O9Wuvdq8",
    authDomain: "twitter-clone-97316.firebaseapp.com",
    projectId: "twitter-clone-97316",
    storageBucket: "twitter-clone-97316.appspot.com",
    messagingSenderId: "85304194341",
    appId: "1:85304194341:web:4e3f9cf8050394f7cf96cc"
  };


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export { db };