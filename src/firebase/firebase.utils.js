import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDNNuXwitoxZWWWwxfOd4SMc0hYMVPQbOM",
    authDomain: "binco-clothing.firebaseapp.com",
    databaseURL: "https://binco-clothing.firebaseio.com",
    projectId: "binco-clothing",
    storageBucket: "",
    messagingSenderId: "913719084999",
    appId: "1:913719084999:web:f6f2296802c60bcb513be2",
    measurementId: "G-K96YH3K4Z4"
};

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;

