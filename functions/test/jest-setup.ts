import { join } from 'path';
// At the top of test/index.test.js


const test = require('firebase-functions-test')({
    databaseURL: 'https://eddystone-test-e4cd3.firebaseio.com',
    storageBucket: 'eddystone-test-e4cd3.appspot.com',
    projectId: 'eddystone-test-e4cd3',
}, join(__dirname, `./app-engine-issue.json`));

// jest.spyOn(admin, 'firestore').mockImplementation(() => console.log('johnson!'))