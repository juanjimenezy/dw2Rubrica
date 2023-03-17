import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBAOx9Kse69iowEVOrcKSuZcmqZguM39Kk",
  authDomain: "rubricadw2.firebaseapp.com",
  projectId: "rubricadw2",
  storageBucket: "rubricadw2.appspot.com",
  messagingSenderId: "349339638201",
  appId: "1:349339638201:web:9a72e01e07df7b3f4efe68",
  measurementId: "G-7MHQ29NQ7Q"
};


app.initializeApp(firebaseConfig);

export const db = app.firestore();
export const auth = app.auth();