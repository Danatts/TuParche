import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
} from 'firebase/firestore';
import { db } from '../config/firebase';

export const createEvent = async (event) => {
  const docRef = await addDoc(collection(db, 'event'), {
    ...event,
  });
  console.log(docRef);
  return docRef;
};

export const getEvents = async () => {
  const querySnapshot = await getDocs(collection(db, 'event'));
  return querySnapshot.forEach((docu) => console.log(`${docu.id} => ${docu.data()}`));
};

export const getSingleDocument = async () => {
  const docRef = doc(db, 'event', 'vZ6TpeTppeWGHWc4Y2D3');
  const docSnap = await getDoc(docRef);
  console.log({ id: docSnap.id, ...docSnap.data() });
};
