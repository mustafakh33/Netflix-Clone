// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrEJMZwKbCifJHWAq9P1yhTr6tr7FNO9I",
  authDomain: "netflix2-967d8.firebaseapp.com",
  projectId: "netflix2-967d8",
  storageBucket: "netflix2-967d8.appspot.com",
  messagingSenderId: "211657915929",
  appId: "1:211657915929:web:ea4013f456866f9ed7f488"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

