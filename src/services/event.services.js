import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';
import { db } from '../config/firebase';

export const createEvent = async (event) => {
  const docRef = await addDoc(collection(db, 'event'), {
    ...event,
  });
  return docRef;
};

export const getAllEvents = async () => {
  const events = [];
  const querySnapshot = await getDocs(collection(db, 'event'));
  querySnapshot.forEach((docu) => events.push({ ...docu.data() }));
  return events;
};

export const getSingleDocument = async () => {
  const docRef = doc(db, 'event', 'vZ6TpeTppeWGHWc4Y2D3');
  const docSnap = await getDoc(docRef);
  return docSnap;
};

export const getAllEventsRealTime = () => {
  const events = [];
  onSnapshot(collection(db, 'event'), (querySnapshot) => {
    querySnapshot.forEach((docu) => {
      events.push(docu.data());
    });
  });
  return events;
};
