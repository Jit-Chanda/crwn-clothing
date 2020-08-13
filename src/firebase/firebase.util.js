import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCJNFTdd88r3JWzB-KIXytNr8v_2ErBQqk",
    authDomain: "crwn-db-jc.firebaseapp.com",
    databaseURL: "https://crwn-db-jc.firebaseio.com",
    projectId: "crwn-db-jc",
    storageBucket: "crwn-db-jc.appspot.com",
    messagingSenderId: "141766461234",
    appId: "1:141766461234:web:c3cb02f8957e2bb5ab392b",
    measurementId: "G-4K2WGCJ03F"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;