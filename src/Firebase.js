// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDcnv4GXu2n3hjLHFa0M30_CmZfak5dg8",
  authDomain: "institute-managament-system.firebaseapp.com",
  databaseURL: "https://institute-managament-system-default-rtdb.firebaseio.com",
  projectId: "institute-managament-system",
  storageBucket: "institute-managament-system.appspot.com",
  messagingSenderId: "512448984421",
  appId: "1:512448984421:web:30ab9e26404c1997301d8c",
  databaseURL: "https://institute-managament-system-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);


export default app