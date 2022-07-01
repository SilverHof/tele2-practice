import { doc } from 'firebase/firestore';
import { toggleItemClass } from './changeClassList.js';


export const changeLocation = () => {
    //getting header block's elements
    const headerLocationBtn = document.querySelector('.header__location-btn');

    const changeLocationBox = document.querySelector('.header__change-location-box');
    const acceptLocationBtn = document.querySelector('.change-location-box__accept-btn');
    const changeLocationBtn = document.querySelector('.change-location-box__change-btn');

    const mainBlock = document.querySelector('.main');

    const navbarBlock = document.querySelector('.navbar');
    const navbarList = document.querySelector('.navbar__list');


    //adding listeners to elements
    headerLocationBtn.addEventListener('click', showLocationBox);
    acceptLocationBtn.addEventListener('click', showLocationBox);
    changeLocationBtn.addEventListener('click', showNavbarBlock);
    navbarList.addEventListener('click', changeLocationName);


    //functions for listeners
    function showLocationBox() {
        toggleItemClass(changeLocationBox, 'hidden');
    };


    function showNavbarBlock() {
        toggleItemClass(mainBlock, 'hidden');
        toggleItemClass(navbarBlock, 'hidden');
    };

    
    function changeLocationName(event) {
        const target = event.target.textContent; // Desctruction
        const cityName = document.querySelector('.change-location-box__city');

        cityName.textContent = target;
        headerLocationBtn.textContent = target;
        

        let key = 'city';
        let value = target;
        localStorage.setItem(key, value);
        console.log(value);
        

        // if (localStorage['city']) {
        //     cityName.textContent = localStorage.getItem('city');
        //     console.log('dfasadfddfa');
        // }



        toggleItemClass(mainBlock, 'hidden');
        toggleItemClass(navbarBlock, 'hidden');
        toggleItemClass(changeLocationBox, 'hidden');
    }
}