import { firestore } from './firebase';

const fetchFirestoreData = async (collectionName) => {
  const collectionRef = firestore.collection(collectionName);
  const snapshot = await collectionRef.get();
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
}