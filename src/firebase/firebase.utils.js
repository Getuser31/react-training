import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBoSJKhTmj3YhhrOlSrZDkvJAlF6QiTSoc",
  authDomain: "crwn-db-38a24.firebaseapp.com",
  projectId: "crwn-db-38a24",
  storageBucket: "crwn-db-38a24.appspot.com",
  messagingSenderId: "13536202923",
  appId: "1:13536202923:web:3e5a236c2240e55a9ea7ee",
  measurementId: "G-40RC9KB5LT"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;