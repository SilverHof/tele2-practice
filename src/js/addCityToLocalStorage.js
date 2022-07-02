import { fillNavbarByApi } from './fillNavbarByApi.js';

export const addCityToLocalStorage = (cityArray) => {
    // get key "name" from array of ojects to array of values
    let cityNameValues = cityArray.map(c => c.name);

    // create a key
    const key = 'city'; 

    // add array of cities to local storage
    localStorage.setItem(key, cityNameValues);
    fillNavbarByApi(cityNameValues);
}