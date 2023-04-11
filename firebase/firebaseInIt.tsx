import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
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
