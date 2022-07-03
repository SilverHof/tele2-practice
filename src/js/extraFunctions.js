// toggle class list
export const toggleItemClass = (item, classname) => {
    item.classList.toggle(classname);
}

// add class list
export const addItemClass = (item, classname) => {
    item.classList.add(classname);
}

// check count of numbers in string
export const getCountOfDigits = (string) => {
    return string.replace(/[^0-9]/g, '').length;
}