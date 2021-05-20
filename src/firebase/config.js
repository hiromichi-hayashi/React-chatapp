import firebase from 'firebase/app';
// firebaseの認証機能
import 'firebase/auth';
// fireaseのfirestore
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyEbpwgQZQ0uJk3JBRLsTgxLNi7J7t_Tk",
  authDomain: "chatapp50-c0336.firebaseapp.com",
  projectId: "chatapp50-c0336",
  storageBucket: "chatapp50-c0336.appspot.com",
  messagingSenderId: "1001920657738",
  appId: "1:1001920657738:web:8d5b55cc26fe4f4239e9b3",
  measurementId: "G-511QL8LDJ2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
export const auth = firebase.auth();
export const db = firebase.firestore();
