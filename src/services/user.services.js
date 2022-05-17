import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

export const createUser = (user) => addDoc(collection(db, 'user'), {
  ...user,
});

export const getAllUser = () => getDocs(collection(db, 'user'));
