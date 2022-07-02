import '../scss/main.scss';
import '../html/index.html';
import { cityFirebaseSetup } from './cityFirebaseSetup.js';
import { checkLocalStorage } from './checkLocalStorage.js';
import { changeLocation } from './changeLocation.js';
import { instructionForm } from './instructionForm.js';
import { checkPhoneNumbers } from './checkPhoneNumbers';
import { addPhoneNumbers } from './addPhoneNumbers';


const appMain = () => {
    cityFirebaseSetup();
    checkLocalStorage();
    addPhoneNumbers();
    checkPhoneNumbers();
    changeLocation();
    instructionForm();
}


appMain();


