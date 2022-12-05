// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import {getDataBase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCV2wLqmvB2ntzM7QcnwwxWV5F-N9_NlNc',
  authDomain: 'quills-2a2af.firebaseapp.com',
  projectId: 'quills-2a2af',
  storageBucket: 'quills-2a2af.appspot.com',
  messagingSenderId: '338352343289',
  appId: '1:338352343289:web:a1f4a9424043b725ffba28',
  measurementId: 'G-ZTGX1Q5HW8',
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
const database = getDataBase(app);

export default database;
