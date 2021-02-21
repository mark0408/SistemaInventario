import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBuvSrnAFkfhIK2B_JtkWN72SKZnOAUWyw",
    authDomain: "skolary-login.firebaseapp.com",
    databaseURL: "https://skolary-login.firebaseio.com",
    projectId: "skolary-login",
    storageBucket: "skolary-login.appspot.com",
    messagingSenderId: "34217525634",
    appId: "1:34217525634:web:6c110b026fc7ae6cf94f9b",
    measurementId: "G-DDV61LMQ0W"
  };
  // Initialize Firebase
  const fb=firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();