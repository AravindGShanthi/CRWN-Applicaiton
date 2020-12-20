import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAwaGiobsd_OyIwMz3APL0dULd_RXbyTis",
  authDomain: "crwn-db-fad7f.firebaseapp.com",
  databaseURL: "https://crwn-db-fad7f.firebaseio.com",
  projectId: "crwn-db-fad7f",
  storageBucket: "crwn-db-fad7f.appspot.com",
  messagingSenderId: "347345824744",
  appId: "1:347345824744:web:b3382f4af6fcf3a59dd25d",
  measurementId: "G-Y4M8KXBGWW",
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
      console.log("Error creating user", error.message);
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
