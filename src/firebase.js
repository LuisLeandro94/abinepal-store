import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDJAAhzPuI0-CTfD8jdeuaKFGp-LEfAkHE',
  authDomain: 'abinepal-store.firebaseapp.com',
  projectId: 'abinepal-store',
  storageBucket: 'abinepal-store.appspot.com',
  messagingSenderId: '1039234099005',
  appId: '1:1039234099005:web:f4d56969787ae3f33f8754',
  measurementId: 'G-D9KEREPS6L',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
