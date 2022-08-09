import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB22MJnb582s0kNjV1Q5iokElAkW1eiTck",
  authDomain: "trivia-57bcd.firebaseapp.com",
  projectId: "trivia-57bcd",
  storageBucket: "trivia-57bcd.appspot.com",
  messagingSenderId: "280132224792",
  appId: "1:280132224792:web:a1b7e532c08288cb4c406d",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)