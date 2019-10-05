import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/database';
import '@firebase/auth';

const app = firebase.initializeApp({
        apiKey: "AIzaSyAVyiWWKf_v_AC3_4CgCgUBNMX1xbkVh-g",
        authDomain: "ipet-2019-cf57b.firebaseapp.com",
        databaseURL: "https://ipet-2019-cf57b.firebaseio.com/",
        projectId: "ipet-2019-cf57b",
        storageBucket: "ipet-2019-cf57b.appspot.com",
        messagingSenderId: "887220367982"
});

const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

const database = firebase.database();

const auth = app.auth();

export const storage = firebase.storage();

export { firestore, database, auth };