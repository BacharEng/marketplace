import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDyldBE7qw-QQjdyhzjsrryNbKUU4RfGyc",
  authDomain: "marketplace-e6f3f.firebaseapp.com",
  projectId: "marketplace-e6f3f",
  storageBucket: "marketplace-e6f3f.appspot.com",
  messagingSenderId: "716969957847",
  appId: "1:716969957847:web:8b30a82ffa8263a1fb1392"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)