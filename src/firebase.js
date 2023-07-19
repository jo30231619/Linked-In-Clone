import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAdc-Jw4RThxckffgYkzULcvF6QFh47msA",
    authDomain: "linkedin-clon e-62dd5.firebaseapp.com",
    projectId: "linkedin-clone-62dd5",
    storageBucket: "linkedin-clone-62dd5.appspot.com",
    messagingSenderId: "231038986427",
    appId: "1:231038986427:web:3d6be9825b4d04cbd2a19e"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };




//Paste firebase config into firebase.js
//import firebase
//line 13 - go to firebase app we just initialize and get fire basestore
//line 14 - get authentication
//line 15 - need 2 variables out 