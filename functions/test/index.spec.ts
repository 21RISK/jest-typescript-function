// const test = require('firebase-functions-test')();
// import * as sinon from 'sinon';
// import * as test from 'firebase-functions-test';
// test();
import * as bob from '../src/helper-functions/get-docs';
import { join } from 'path';
import * as admin from 'firebase-admin';

// At the top of test/index.test.js

describe('Cloud Functions', () => {
    let readUsers: any;

    beforeAll(async () => {
        // Stubbing out initializeApp
        jest.spyOn(bob, 'getDocs').mockReturnValue([{hans: '123'}])
        // const adminInitStub = sinon.stub(admin, 'initializeApp');
        // sinon.stub(admin, 'firestore')
        // .get(() => {
        //     return function() {
        //         return {
        //             collection: (path) => {
        //                 return {
        //                     get: () => {
        //                         return {
        //                             docs: [{user: 'mock-user-1'}, {user: 'mock-user-2'}]
        //                         }
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // });
        // const adminInitStub = jest.spyOn(admin, 'initializeApp').mockImplementation(() => console.log('mock implementation called!'));
        readUsers = await import('../src/helper-functions/read-users');
    });

    it('Testing read users', async () => {
        await readUsers.readUsersFromFirestore();
        expect(true).toBe(true);
        // try {
        //     console.log('Now testing: read users');
        //     const result = await readUsers.readUsersFromFirestore();
        //     console.log(`result: ${result}`);
        //     console.log(result);
        // } catch (err) {
        //     console.log(`Testing read users failed with: '${err.message}'`);
        // }
    });    

});
