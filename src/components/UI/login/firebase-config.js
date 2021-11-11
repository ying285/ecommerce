import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCYFB1N0GlVspatVPuW-5w9hLhiUlrdtek",
  authDomain: "newproject-b0eeb.firebaseapp.com",
  projectId: "newproject-b0eeb",
  storageBucket: "newproject-b0eeb.appspot.com",
  messagingSenderId: "788317358573",
  appId: "1:788317358573:web:6e89937c3a45098130bfe4",
  measurementId: "G-M5JBY5GTKG",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;
