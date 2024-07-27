
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBpfjxPHBkvfZzrNQk8cRefrU1CbY1D_7c",
  authDomain: "dynamic-page-builder.firebaseapp.com",
  projectId: "dynamic-page-builder",
  storageBucket: "dynamic-page-builder.appspot.com",
  messagingSenderId: "428358573992",
  appId: "1:428358573992:web:6ed25247bbdc586400479d",
  measurementId: "G-XJ5WL5KFGM",
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, doc, setDoc, getDoc };
