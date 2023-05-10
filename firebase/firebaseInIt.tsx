import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC4cZJWnyJG992ZR7yF1lWbTZy1UPaRuyk",
  authDomain: "accountshop-ba42e.firebaseapp.com",
  projectId: "accountshop-ba42e",
  storageBucket: "accountshop-ba42e.appspot.com",
  messagingSenderId: "577437151547",
  appId: "1:577437151547:web:ae53f84236c3ac363c871e",
  measurementId: "G-W1CMKHLJM8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

const firestore = getFirestore();
const specialOfTheDay = doc(firestore, 'dailySpecial/2023-05-07')
// const childDoc = doc(specialOfTheDay, 'orderHistory/totalSales')
// dailySpecial/2023-05-07/orderHistory/totalSales

const writeData = () => {
  const docData = {
    description: 'deneme123',
    price: 3.99,
    milk: 'Whole',
    vegan: false,
  }
  setDoc(specialOfTheDay, docData)
  .then(() => {
    console.log("DATA SETTED")
  })
  .catch((error) => {
    console.log(`error: ${error}`)
  })
}
writeData()