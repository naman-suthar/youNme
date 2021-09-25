// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4ndUrLz-2F30ekr-VHnf3KwoXtm9X9Wk",
  authDomain: "calling-app-fda82.firebaseapp.com",
  databaseURL: "https://calling-app-fda82-default-rtdb.firebaseio.com",
  projectId: "calling-app-fda82",
  storageBucket: "calling-app-fda82.appspot.com",
  messagingSenderId: "989739474876",
  appId: "1:989739474876:web:7214187e6effcce70995b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

