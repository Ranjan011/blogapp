// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "mern-blog-bbd09.firebaseapp.com",
//   projectId: "mern-blog-bbd09",
//   storageBucket: "mern-blog-bbd09.appspot.com",
//   messagingSenderId: "1000490606963",
//   appId: "1:1000490606963:web:b1ee266095e9348e3de506",
// };

const firebaseConfig = {
  apiKey: "AIzaSyByLrvkMbbThAgbDSAtSSNBpoQmwTKmjN8",
  authDomain: "mern-blog-bbd09.firebaseapp.com",
  projectId: "mern-blog-bbd09",
  storageBucket: "mern-blog-bbd09.appspot.com",
  messagingSenderId: "1000490606963",
  appId: "1:1000490606963:web:b1ee266095e9348e3de506",
};

// Initialize Firebase
export const appBlog = initializeApp(firebaseConfig);
