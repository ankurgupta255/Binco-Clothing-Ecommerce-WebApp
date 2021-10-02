import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDNNuXwitoxZWWWwxfOd4SMc0hYMVPQbOM",
  authDomain: "binco-clothing.firebaseapp.com",
  databaseURL: "https://binco-clothing.firebaseio.com",
  projectId: "binco-clothing",
  storageBucket: "",
  messagingSenderId: "913719084999",
  appId: "1:913719084999:web:f6f2296802c60bcb513be2",
  measurementId: "G-K96YH3K4Z4",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
