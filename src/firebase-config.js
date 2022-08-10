// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzDLvql5GwoQoHpo8u_py914tBI5NslII",
  authDomain: "cart-app-7cd58.firebaseapp.com",
  projectId: "cart-app-7cd58",
  storageBucket: "cart-app-7cd58.appspot.com",
  messagingSenderId: "445316006089",
  appId: "1:445316006089:web:552e4426075d490b3f8d18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);