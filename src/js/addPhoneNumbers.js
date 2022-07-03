import { getFirebaseApi } from './getFirebaseApi.js';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


export const addPhoneNumbers = () => {
    // run a function to get firebase api
    getFirebaseApi()

    // get phone input and phone value
    const phoneInput = document.querySelector('.instruction__input'); 
    const phoneValue = phoneInput.value;

    // init service
    const dataBase = getFirestore();
    // collection reference
    const collectionRef = collection(dataBase, 'phone-numbers');


    // add new document to firestore database
    addDoc(collectionRef, {
        number: phoneValue,
    })
}