import '../scss/main.scss';
import '../html/index.html';
import { cityFirebaseSetup } from './cityFirebaseSetup.js';
import { checkLocalStorage } from './checkLocalStorage.js';
import { changeLocation } from './changeLocation.js';
import { instructionForm } from './instructionForm.js';

const appMain = () => {
    cityFirebaseSetup();
    checkLocalStorage();
    changeLocation();
    instructionForm();
}


appMain();


