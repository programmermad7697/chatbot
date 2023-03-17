import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAn3jziW691nz18dfvc-XJiJic-VFJZJSI",
  authDomain: "chatgpt-v2-build.firebaseapp.com",
  projectId: "chatgpt-v2-build",
  storageBucket: "chatgpt-v2-build.appspot.com",
  messagingSenderId: "676874810198",
  appId: "1:676874810198:web:f35f62fbf17d40249d1cf7",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
