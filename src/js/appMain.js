import '../scss/main.scss';
import '../html/index.html';
import { changeLocation } from './changeLocation.js';
import { instructionForm } from './instructionForm.js';
import { cityFirebaseSetup } from './cityFirebaseSetup.js';


const appMain = () => {
    cityFirebaseSetup();
    changeLocation();
    instructionForm();
}


appMain();


