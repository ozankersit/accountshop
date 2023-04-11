import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4cZJWnyJG992ZR7yF1lWbTZy1UPaRuyk",
  authDomain: "accountshop-ba42e.firebaseapp.com",
  projectId: "accountshop-ba42e",
  storageBucket: "accountshop-ba42e.appspot.com",
  messagingSenderId: "577437151547",
  appId: "1:577437151547:web:ae53f84236c3ac363c871e",
  measurementId: "G-W1CMKHLJM8"
};

// Initialize Firebase
// const initMyFirebase = () => {
//   if (!getApps().length) {
//     const app = initializeApp(firebaseConfig);
//     const auth = getAuth(app);
//     if (typeof window !== "undefined") {
//       if ("measurementId" in firebaseConfig) {
//         const analytics = getAnalytics(app);
//         const performance = getPerformance(app);
//       }
//     }
//     console.log("Initialized firebase");
//   } else {
//     console.log("Already initialized");
//   }
// };
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// export default initMyFirebase;
