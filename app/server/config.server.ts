import { initializeApp } from '@firebase/app';
import { getDatabase, ref } from '@firebase/database';
import { DB_URL } from './bootstrap.server';

const firebaseApp = initializeApp({ databaseURL: DB_URL });
const firebaseDb = getDatabase(firebaseApp);

console.log({ firebaseApp, firebaseDb });
