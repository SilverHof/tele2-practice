import { getFirebaseApi } from './getFirebaseApi.js';
import { getFirestore, collection, getDocs, query, doc } from 'firebase/firestore';
import { addItemClass, toggleItemClass } from './individualFunctions.js';
import { addPhoneNumbers } from './addPhoneNumbers.js';


export const checkPhoneNumbers = () => {
    // run a function to get firebase api
    getFirebaseApi();

    // init service
    const dataBase = getFirestore();
        
    // collection reference
    const collectionRef = collection(dataBase, 'phone-numbers');


    // get array of phone numbers
    getDocs(collectionRef)
        .then((snapshot) => {

            // get collection data to array of objects
            let numberArray = [];
            snapshot.docs.forEach((doc) => {
                numberArray.push({
                    ...doc.data(),
                    id: doc.id
                });
            });


            let numberValues = numberArray.map(number => number.number);


            const successBox = document.querySelector('.instruction__success-box');
            const failBox = document.querySelector('.instruction__fail-box');


            // get phone input and phone value
            const phoneInput = document.querySelector('.instruction__input'); 
            const phoneValue = phoneInput.value;
            

            // check if there is a number in database or not
            if (numberValues.indexOf(phoneValue) > -1) {
                const failText = document.querySelector('.instruction__fail-text');
                failText.textContent = `На номер можно получить один промокод`;
                toggleItemClass(failBox, 'fail');
                addItemClass(successBox, 'success');
            } else {
                addPhoneNumbers();
                toggleItemClass(successBox, 'success');
                addItemClass(failBox, 'fail');
            }   
            
        });
}