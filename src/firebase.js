// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig =

// export default ;

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCIdywJ6k_bxFI9eISVYUccDeVrDdZgxVA",
  authDomain: "instagramclone-32f63.firebaseapp.com",
  databaseURL: "https://instagramclone-32f63.firebaseio.com",
  projectId: "instagramclone-32f63",
  storageBucket: "instagramclone-32f63.appspot.com",
  messagingSenderId: "665853924284",
  appId: "1:665853924284:web:afc415b289ca374cb691b9",
  measurementId: "G-ZHRCHVG1TD",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
