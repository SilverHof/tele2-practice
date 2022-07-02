import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

export const addPhoneNumbers = () => {
    const phoneInput = document.querySelector('.instruction__input');
    console.log(phoneInput);
    const phoneValue = phoneInput.value;
    
    console.log(phoneInput.value);
    console.log(phoneInput.textLength);
}