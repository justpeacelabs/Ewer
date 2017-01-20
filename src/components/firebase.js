const firebase = require('firebase');
import { SubmissionError } from 'redux-form';
import { firebaseConfig } from './firebase-config';
import store from '../store';
import { gotoPage } from './actions';

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();

const TABLE_RUMOURS = 'rumours-test';
const TABLE_USER_RUMOURS = 'user-rumours-test';
const TABLE_TAGS = 'tags-test';

export function submitFormValues(values) {
  const uid = firebaseAuth.currentUser.uid;
  const newRumourKey = firebaseDb.ref().child(TABLE_RUMOURS).push().key;

  const postData = {
    ...values,
    timestamp: firebase.database.ServerValue.TIMESTAMP,
    rumourTags: values.rumourTags.map(t => t.text),
    rumourDate: (new Date(values.rumourDate)).getTime(),
    uid,
    hidden: false
  };

  let updates = {};
  updates[`/${TABLE_RUMOURS}/${newRumourKey}`] = postData;
  updates[`/${TABLE_USER_RUMOURS}/${uid}/${newRumourKey}`] = postData;

  postData.rumourTags.forEach(tagName => {
    updates[`/${TABLE_TAGS}/${tagName}/${newRumourKey}`] = true;
  });

  return firebase.database().ref().update(updates).then(() => {
    store.dispatch(gotoPage(4));
  }, (e) => {
    throw new SubmissionError({  _error: e });
  });
}

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// export function submitFormValues(values) {
//   return sleep(10000) // simulate server latency
//     .then(() => {
//       console.log('SUBMITTED!!');
//     });
// }