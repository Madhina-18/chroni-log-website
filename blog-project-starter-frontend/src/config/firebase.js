import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDiMqECakt-tVkWWCVF-VZv1_kTqeUEbvk",
  authDomain: "blog-app-b744b.firebaseapp.com",
  projectId: "blog-app-b744b",
  storageBucket: "blog-app-b744b.firebasestorage.app",
  messagingSenderId: "685285282245",
  appId: "1:685285282245:web:0c5c0aa931fcf02c8b3bac",
  measurementId: "G-1B6DF2MMR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export default auth
