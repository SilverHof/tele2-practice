// Import the functions you need from the SDKs you need
import { getFirebaseApi } from './getFirebaseApi.js';
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore';



export const cityFirebaseSetup = () => {
    // run a function
    getFirebaseApi();

    // init service
    const dataBase = getFirestore();
        
    // collection reference
    const collectionRef = collection(dataBase, 'city');


    
    // get collection data
    getDocs(collectionRef)
        .then((snapshot) => {
            // get collection data to array of objects
            let cityArray = [];
            snapshot.docs.forEach((doc) => {
                cityArray.push({
                    ...doc.data(),
                    id: doc.id
                })
            });


            // get key "name" from array of ojects to array of values
            let cityNameValues = cityArray.map(c => c.name);
            
            // get length of array cityNameValues
            const numberOfCityValue = cityNameValues.length;

            // get navbarKist element
            const navbarList = document.querySelector('.navbar__list');
            
            
            // create, add, fill elements of tag "li" to navbarList
            for (let i = 0; i < numberOfCityValue; i++) { 
                const navbarItem = document.createElement('li');
                navbarItem.classList.add('navbar__item');
                navbarItem.textContent = cityNameValues[i];


                navbarList.appendChild(navbarItem);
            }
        })
        .catch(error => {
            console.log(error.message);        
        });    
}