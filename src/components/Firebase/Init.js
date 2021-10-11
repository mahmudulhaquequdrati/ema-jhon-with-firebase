import { initializeApp } from "firebase/app";
import firebaseConfig from "./Config";

const FirebaseAuth = () => {
  initializeApp(firebaseConfig);
};

export default FirebaseAuth;
