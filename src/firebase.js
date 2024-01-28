

// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDcOpzc_jfYyXjF35HL_XI8AvdlsQ9ge90",
  authDomain: "todo-firebase-reactredux-d77dc.firebaseapp.com",
  projectId: "todo-firebase-reactredux-d77dc",
  storageBucket: "todo-firebase-reactredux-d77dc.appspot.com",
  messagingSenderId: "903453204519",
  appId: "1:903453204519:web:acc0988a5b5aa62b136e02"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app as default };