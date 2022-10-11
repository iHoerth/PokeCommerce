import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDzp2LAV83JyHUfQar6rzM6aGgHwBCSnG8',
    authDomain: 'pokecommerce-49c27' + '.firebaseapp.com',
    projectId: 'pokecommerce-49c27',
    storageBucket: 'pokecommerce-49c27' + ".appspot.com",
};


const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(firebaseApp);

setPersistence(auth, browserLocalPersistence);


