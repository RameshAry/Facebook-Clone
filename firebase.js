import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0A4c1Bmusc_UovnhssCMmMWgVvfZVX-A",
  authDomain: "facebook-clone-e4c11.firebaseapp.com",
  projectId: "facebook-clone-e4c11",
  storageBucket: "facebook-clone-e4c11.appspot.com",
  messagingSenderId: "998102309213",
  appId: "1:998102309213:web:7f106e3d2b7fbc8b0330b4",
  measurementId: "G-15QM17X4W4",
};

const app = initializeApp(firebaseConfig);

// const storage = getStorage(app);
const db = getFirestore(app);

export { db };
