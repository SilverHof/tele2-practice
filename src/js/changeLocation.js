import { toggleItemClass } from './changeClassList.js';


export const changeLocation = () => {
    //functions for listeners
    const showLocationBox = () => {
        toggleItemClass(changeLocationBox, 'hidden');
    };


    const showNavbarBlock = () => {
        toggleItemClass(mainBlock, 'hidden');
        toggleItemClass(navbarBlock, 'hidden');
    };


    const changeLocationName = (event) => {
        // get location from clicked element
        const target = event.target.textContent;
        const cityName = document.querySelector('.change-location-box__city');


        // add new location to text element and button
        cityName.textContent = target;
        headerLocationBtn.textContent = target;


        // add new item to local storage
        const key = 'current-city';
        const value = target;
        localStorage.setItem(key, value);


        toggleItemClass(mainBlock, 'hidden');
        toggleItemClass(navbarBlock, 'hidden');
        toggleItemClass(changeLocationBox, 'hidden');
    }


    //get header block's elements
    const headerLocationBtn = document.querySelector('.header__location-btn');

    const changeLocationBox = document.querySelector('.header__change-location-box');
    const acceptLocationBtn = document.querySelector('.change-location-box__accept-btn');
    const changeLocationBtn = document.querySelector('.change-location-box__change-btn');

    const mainBlock = document.querySelector('.main');

    const navbarBlock = document.querySelector('.navbar');
    const navbarList = document.querySelector('.navbar__list');


    //add listeners to elements
    headerLocationBtn.addEventListener('click', showLocationBox);
    acceptLocationBtn.addEventListener('click', showLocationBox);
    changeLocationBtn.addEventListener('click', showNavbarBlock);
    navbarList.addEventListener('click', changeLocationName);

}