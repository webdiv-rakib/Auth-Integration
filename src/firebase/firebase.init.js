// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRElKKsBiS_fZ7E2w_fe9v9JK163BFXLw",
  authDomain: "auth-integration-2f80e.firebaseapp.com",
  projectId: "auth-integration-2f80e",
  storageBucket: "auth-integration-2f80e.firebasestorage.app",
  messagingSenderId: "858844477871",
  appId: "1:858844477871:web:6506494230ebe52ee6175a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;