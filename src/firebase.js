// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyDoAnxgT1OHAKD1qi6dwRRyQiIkZoFTN7c',
  authDomain: 'hng-gallery-authentication.firebaseapp.com',
  projectId: 'hng-gallery-authentication',
  storageBucket: 'hng-gallery-authentication.appspot.com',
    messagingSenderId: '513043387737',
  appId: '1:513043387737:web:eca590929ae2f3a80ee848',
}


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth, signInWithEmailAndPassword };
