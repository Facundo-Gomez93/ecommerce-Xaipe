
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDoQY77kQ7npKnCa4SUIHlZjWME2G2Rx_A",
  authDomain: "ecommerce-xaipe.firebaseapp.com",
  projectId: "ecommerce-xaipe",
  storageBucket: "ecommerce-xaipe.appspot.com",
  messagingSenderId: "690171244590",
  appId: "1:690171244590:web:8484ee8ca719d17d782fbf"
};


const app = initializeApp(firebaseConfig);

export const initFirebase = () => app 