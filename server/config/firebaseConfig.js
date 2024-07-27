import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { FIREBASE_SERVICE_ACCOUNT_KEY } from "./config.js";

const serviceAccount = JSON.parse(FIREBASE_SERVICE_ACCOUNT_KEY);

const app = initializeApp({
  credential: cert(serviceAccount),
});

export const db = getFirestore(app);
