// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// //console.log(import.meta.env.VITE_SOME_KEY)

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeoRp-rKfMv8et6tS_HGkLesa5lskDt7M",
  authDomain: "restaurant-x-99643.firebaseapp.com",
  projectId: "restaurant-x-99643",
  storageBucket: "restaurant-x-99643.appspot.com",
  messagingSenderId: "827543450476",
  appId: "1:827543450476:web:64f681ee5f9fac94f27949"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;