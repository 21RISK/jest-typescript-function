import { firestore } from '../firebase';

export async function getDocs(path: string) {
    const usersRef = firestore.collection(path);
    const snapshot = await usersRef.get();
    const users = snapshot.docs.map(doc => doc.data());
    return users;
}
