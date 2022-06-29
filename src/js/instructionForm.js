import { addItemClass, toggleItemClass } from './changeClassList.js';


export const instructionForm = () => {
    //adding listener on user input
    window.addEventListener('DOMContentLoaded', function() {
        const phoneInput = document.querySelector('.instruction__input');

        phoneInput.addEventListener('input', toMask, false);
        phoneInput.focus();

        setCursorPosition(3, phoneInput);
        console.log(phoneInput.value);
    });


    function setCursorPosition(position, event) {
        event.focus();

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
        const acceptDataInput = document.querySelector('.instruction__accept-data-input');


        const phoneInput = document.querySelector('.instruction__input');
        console.log(phoneInput.value);
        

        
        if(acceptDataInput.checked) {
            toggleItemClass(successBox, 'success');
            addItemClass(failBox, 'fail');
        } else {
            toggleItemClass(failBox, 'fail');
            addItemClass(successBox, 'success');         
        }
    }
}


    


    // document.addEventListener('DOMContentLoaded', phoneValidate);

    // function phoneValidate(){
    //     const phoneInput = document.querySelector('.instruction__input');
        

    //     phoneInput.addEventListener('input', onPhoneInput);

        
    //     function onPhoneInput(event) {
    //         const inputValue = event.target.value;
    //         console.log(inputValue);
            
    //     }

    //     function getInputNumberValue(input) {
    //         return input.value.replace(/\D/g, '');
    //     }
    // }