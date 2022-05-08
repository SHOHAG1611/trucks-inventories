// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getAuth} from './'
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0XHfxssqxa0u-zV0zWsVs1rkK31ojMHw",
  authDomain: "trucks-inventories.firebaseapp.com",
  projectId: "trucks-inventories",
  storageBucket: "trucks-inventories.appspot.com",
  messagingSenderId: "265524762341",
  appId: "1:265524762341:web:52f7074245f3304cdde60c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;
// const auth=getAuth(app)
// export default auth;