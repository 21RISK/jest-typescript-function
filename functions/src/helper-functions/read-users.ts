import { firestore } from '../firebase';
import * as getDocs from './get-docs';

export async function readUsersFromFirestore(): Promise<any[]> {
    try {
        const usersDocs = await getDocs.getDocs('users');
        console.log(usersDocs);
        return usersDocs; 
    } catch (error) {
        throw error;
    }
}
