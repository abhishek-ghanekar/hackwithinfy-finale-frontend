import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPYKopA4ByB1UZUVy8h6LBH1IfTcn0aB8",
  authDomain: "hackwithinfy-finale.firebaseapp.com",
  projectId: "hackwithinfy-finale",
  storageBucket: "hackwithinfy-finale.appspot.com",
  messagingSenderId: "245144658193",
  appId: "1:245144658193:web:7071eaffae4933ead86cb0",
  measurementId: "G-PLSB3RJ109"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };