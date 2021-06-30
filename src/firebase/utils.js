import firebase from "firebase/app";
import 'firebase/firebase';
import 'firebase/auth';
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCchnunFR4h9-33-aWaVFpQJn41uZ_Ht40",
  authDomain: "crwn-db-e95a3.firebaseapp.com",
  projectId: "crwn-db-e95a3",
  storageBucket: "crwn-db-e95a3.appspot.com",
  messagingSenderId: "992071746303",
  appId: "1:992071746303:web:380adb2d78b14bdf0082ca",
  measurementId: "G-8H1DR8WJ20"
};

firebase.initializeApp(config);

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
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;