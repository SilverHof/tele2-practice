import { getFirebaseApi } from './getFirebaseApi.js';
import { getFirestore, collection } from 'firebase/firestore';
import { getCityApi } from './getCityApi.js';
import { fillNavbarByLocalStorage } from './fillNavbarByLocalStorage.js';



export const cityFirebaseSetup = () => {
    // run a function to get firebase api
    getFirebaseApi();

    // init service
    const dataBase = getFirestore();
        
    // collection reference
    const collectionRef = collection(dataBase, 'city');

    // run a function to get city api > add to an array > fill to a navbar block
    if (localStorage.getItem('city')) {
        fillNavbarByLocalStorage();
    } else {
        const get = getCityApi(collectionRef);
    }
    
    
}