// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_APIKEY ,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_PROJECTID ,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;



// apiKey: "AIzaSyAy-Sr-q2gHbiRnXYkaKLmbunPS4wiCl-U",
// authDomain: "radiant-artistry.firebaseapp.com",
// projectId: "radiant-artistry",
// storageBucket: "radiant-artistry.appspot.com",
// messagingSenderId: "678616579077",
// appId: "1:678616579077:web:ccdb06b5d3db080dfdf06c"