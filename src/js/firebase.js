// Import the functions you need from the SDKs you need
import { getCityApi } from './getCityApi.js';
import { getFirestore, collection, getDocs } from 'firebase/firestore';



export const firebaseSetup = () => {
    getCityApi();
    // init service
    const dataBase = getFirestore();
    
    // collection reference
    const collectionRef = collection(dataBase, 'city');
    
    // get collection data
    getDocs(collectionRef)
        .then((snapshot) => {
            let city = [];
            snapshot.docs.forEach((doc) => {
                city.push({
                    ...doc.data(),
                    id: doc.id
                })
            });
            console.log(city);
            console.log(city[4].name);
            
        })
        .catch(error => {
            console.log(error.message);        
        })
}