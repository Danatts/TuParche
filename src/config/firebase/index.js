import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDnBEjsXBZgUYQzpj-u4Lzz-z_OQ2oySkE',
  authDomain: 'tuparche-00.firebaseapp.com',
  projectId: 'tuparche-00',
  storageBucket: 'tuparche-00.appspot.com',
  messagingSenderId: '375814810007',
  appId: '1:375814810007:web:ccbaccf371a85dcd9b7cd2',
  measurementId: 'G-MXJRLEWJRK',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
