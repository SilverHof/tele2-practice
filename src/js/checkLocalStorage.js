export const checkLocalStorage = () => {
    // get text blocks to change
    const cityName = document.querySelector('.change-location-box__city');
    const headerLocationBtn = document.querySelector('.header__location-btn');


    // check if local storage have a key
    if (localStorage.getItem('city')) {
        cityName.textContent = localStorage.getItem('city');
        headerLocationBtn.textContent = localStorage.getItem('city');
    }
}