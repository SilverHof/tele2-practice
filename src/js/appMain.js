import '../scss/main.scss';
import '../html/index.html';
import { changeLocation } from './changeLocation.js';
import { instructionForm } from './instructionForm.js';


const appMain = () => {
    changeLocation();
    instructionForm();
}


appMain();


