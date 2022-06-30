import '../scss/main.scss';
import '../html/index.html';
import { changeLocation } from './changeLocation.js';
import { instructionForm } from './instructionForm.js';
import { firebaseSetup } from './firebase';


const appMain = () => {
    changeLocation();
    instructionForm();
    firebaseSetup();
}


appMain();


