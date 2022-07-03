import { getFirebaseApi } from './getFirebaseApi.js';
import { getFirestore, collection } from 'firebase/firestore';
import { getCityApi } from './getCityApi.js';
import { fillNavbar } from './fillNavbar.js';



export const cityFirebaseSetup = () => {
    // run a function to get firebase api
    getFirebaseApi();

    // init service
    const dataBase = getFirestore();
        
    // collection reference
    const collectionRef = collection(dataBase, 'city');

    // run a function to get city api > add to an array > fill to a navbar block
    if (localStorage.getItem('city')) {
        const cityNameValuesString = localStorage.getItem('city');
        const cityNameValues = cityNameValuesString.split(',');
        fillNavbar(cityNameValues)
    } else {
        const get = getCityApi(collectionRef);
    }
    
    
}