import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";


const firebaseConfig = {
    apiKey: "AIzaSyAF3gVLS4q8D36T4kVt9ec9CXhYBDWAtBM",
    authDomain: "saas-translator-app-it.firebaseapp.com",
    projectId: "saas-translator-app-it",
    storageBucket: "saas-translator-app-it.appspot.com",
    messagingSenderId: "587682785110",
    appId: "1:587682785110:web:3a011d91593c74d60b18f7"
  };

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore(app);
  const auth = getAuth(app);
  const functions = getFunctions(app);

  export { db, auth, functions };