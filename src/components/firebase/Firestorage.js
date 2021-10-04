import firebase from 'firebase/compat/app';
import 'firebase/auth'
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD4ndUrLz-2F30ekr-VHnf3KwoXtm9X9Wk",
    authDomain: "calling-app-fda82.firebaseapp.com",
    databaseURL: "https://calling-app-fda82-default-rtdb.firebaseio.com",
    projectId: "calling-app-fda82",
    storageBucket: "calling-app-fda82.appspot.com",
    messagingSenderId: "989739474876",
    appId: "1:989739474876:web:7214187e6effcce70995b9"
  };

export const app = firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;



