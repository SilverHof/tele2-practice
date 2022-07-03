export const fillNavbarByApi = (cityNameValues) => {
    // get key "name" from array of ojects to array of values
    const numberOfCityValue = cityNameValues.length;

    // get navbarList element
    const navbarList = document.querySelector('.navbar__list');
    
    
    // create, add, fill elements of tag "li" to navbarList
    for (let i = 0; i < numberOfCityValue; i++) { 
        const navbarItem = document.createElement('li');
        navbarItem.classList.add('navbar__item');
        navbarItem.textContent = cityNameValues[i];


        navbarList.appendChild(navbarItem);
    }

    

    console.log('created by api');
}