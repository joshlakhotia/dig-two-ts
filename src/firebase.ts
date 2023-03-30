import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9-W0_502A65-_nVmsfALdMf99I2xHKWY",
  authDomain: "doesitgo2-development.firebaseapp.com",
  projectId: "doesitgo2-development",
  storageBucket: "doesitgo2-development.appspot.com",
  messagingSenderId: "392121314610",
  appId: "1:392121314610:web:9973f3bfe8e9dfe5a27b2b"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;