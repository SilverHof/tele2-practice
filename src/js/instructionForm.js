import { addItemClass, toggleItemClass, getCountOfDigits } from './individualFunctions.js';


export const instructionForm = () => {
    //adding listener on user input
    window.addEventListener('DOMContentLoaded', function() {
        const phoneInput = document.querySelector('.instruction__input');

        phoneInput.addEventListener('input', toMask, false);

        setCursorPosition(3, phoneInput);
        console.log(phoneInput.value);
    });


    function setCursorPosition(position, event) {

        let range;

        if (event.setSelectionRange) {
            event.setSelectionRange(position, position);
        } else if (event.createTextRange) {
            range = event.createTextRange();

            range.collapse(true);
            range.moveEnd('character', position);
            range.moveStart('character', position);
            range.select();
        };
    };
    


    function toMask(event) {
        let matrix = this.placeholder;
        let count = 0;
        let def = matrix.replace(/\D/g, "");
        let val = this.value.replace(/\D/g, "");
        def.length >= val.length && (val = def);

        matrix = matrix.replace(/[_\d]/g, function(a) {
            return val.charAt(count++) || "_"
        });

        this.value = matrix;
        count = matrix.lastIndexOf(val.substr(-1));
        count < matrix.length && matrix != this.placeholder ? count++ : count = matrix.indexOf("_");
        setCursorPosition(count, this)
    };



    const sendBtn = document.querySelector('.instruction__send-btn');
    const successBox = document.querySelector('.instruction__success-box');
    const failBox = document.querySelector('.instruction__fail-box');

    
    sendBtn.addEventListener('click', sendData);


    function sendData(event) {
        event.preventDefault();
        // get accept check
        const acceptDataInput = document.querySelector('.instruction__accept-data-input');

        // get phone input
        const phoneInput = document.querySelector('.instruction__input');

        // get phone input's value 
        const phoneValue = phoneInput.value;
        

        if (getCountOfDigits(phoneValue) == 11 && acceptDataInput.checked) {
            toggleItemClass(successBox, 'success');
            addItemClass(failBox, 'fail');
            
        } else {
            toggleItemClass(failBox, 'fail');
            addItemClass(successBox, 'success'); 
        }
    }
}