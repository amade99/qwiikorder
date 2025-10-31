// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA67B5gPx7YWE9uDMDMwaoxZ4NrnKwpmV0",
  authDomain: "qwiikorder-2db09.firebaseapp.com",
  projectId: "qwiikorder-2db09",
  storageBucket: "qwiikorder-2db09.firebasestorage.app",
  messagingSenderId: "493016887819",
  appId: "1:493016887819:web:fe240280e399b14e574d0e"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig): getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};