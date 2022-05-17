import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

export const createEvent = async (event) => {
  const docRef = addDoc(collection(db, 'event'), {
    ...event,
  });
  console.log(docRef);
  return docRef;
};

export const readEvent = () => getDocs(collection(db, 'event'));
