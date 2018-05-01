import * as admin from 'firebase-admin'

console.log('firebase admin is now calling initializeApp()');
admin.initializeApp();

console.log('Now calling firestore!');
export const firestore = admin.firestore();
