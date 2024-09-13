import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBh7oUXOJxktwEQJC0iYMX3m5au816j2rQ",
    authDomain: "test-6191d.firebaseapp.com",
    projectId: "test-6191d",
    storageBucket: "test-6191d.appspot.com",
    messagingSenderId: "783943197240",
    appId: "1:783943197240:web:aa8b3f535acded618abccd",
    measurementId: "G-XEY5FYEWKP"
}

const  app  =  initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export default app;