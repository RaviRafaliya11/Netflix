import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCbsJ7PQGP7mSHPBsaHEjrPrv9l-kQEgck",
  authDomain: "netflix-b7197.firebaseapp.com",
  projectId: "netflix-b7197",
  storageBucket: "netflix-b7197.appspot.com",
  messagingSenderId: "118646630819",
  appId: "1:118646630819:web:1bceef322733a6a72a5216",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
