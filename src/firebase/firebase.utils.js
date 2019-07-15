import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCMNDkA2lIs0hjPalVv1pdm7Is2b0uPv-o",
  authDomain: "crwn-db-ecfb0.firebaseapp.com",
  databaseURL: "https://crwn-db-ecfb0.firebaseio.com",
  projectId: "crwn-db-ecfb0",
  storageBucket: "",
  messagingSenderId: "887898912549",
  appId: "1:887898912549:web:26b9e9cc5dc1327a"
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
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  //console.log(userRef);

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
