import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCFSARbS-vf749YwfJcOTpatcqF-FAw98A",
  authDomain: "sitegram-d03c6.firebaseapp.com",
  projectId: "sitegram-d03c6",
  storageBucket: "sitegram-d03c6.appspot.com",
  messagingSenderId: "493142508013",
  appId: "1:493142508013:web:3669d0486d98f0aed5a7e4"
}).auth();
