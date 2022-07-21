import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';



// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyAZNJbYvACAxjlP4iLZNImVONS9aO26DRc",
  authDomain: "auctioneer-87a1e.firebaseapp.com",
  projectId: "auctioneer-87a1e",
  storageBucket: "auctioneer-87a1e.appspot.com",
  messagingSenderId: "399342458607",
  appId: "1:399342458607:web:881e2951bb70b1f5b46d1a"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();