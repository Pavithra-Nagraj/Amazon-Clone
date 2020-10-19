import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDJJV73v84uSHydW40FnECnQ4B-nuTxXHs",
    authDomain: "clone-a8248.firebaseapp.com",
    databaseURL: "https://clone-a8248.firebaseio.com",
    projectId: "clone-a8248",
    storageBucket: "clone-a8248.appspot.com",
    messagingSenderId: "821441370876",
    appId: "1:821441370876:web:072a2fdc06bfc9fb461579",
    measurementId: "G-C031PG3N0C"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };