import { getDocs } from 'firebase/firestore';
import { addCityToLocalStorage } from './addCityToLocalStorage';


export const getCityApi = (collectionRef) => {
    getDocs(collectionRef)
        .then((snapshot) => {

            // get collection data to array of objects
            let cityArray = [];
            snapshot.docs.forEach((doc) => {
                cityArray.push({
                    ...doc.data(),
                    id: doc.id
                });
            });

            // add cityArray to local storage
            addCityToLocalStorage(cityArray);
        });
             
}