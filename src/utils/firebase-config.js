import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAW7ThwwJ5kmgbks1pXLKOJB5dDnPNoRk4",
  authDomain: "react-mernflix-clone.firebaseapp.com",
  projectId: "react-mernflix-clone",
  storageBucket: "react-mernflix-clone.appspot.com",
  messagingSenderId: "1079871340120",
  appId: "1:1079871340120:web:cab10c427450af1c91942d"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)