function indexOfArrayObj (arr, callback) { 
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return i;
        }
    }
    return -1;
}

const ROOT_HEADER = document.querySelector('#header');
const ROOT_PRODUCTS = document.querySelector('#products');
const ROOT_CART = document.querySelector('#cart');
const ROOT_LOADER = document.querySelector('#loader');
const ROOT_ERROR = document.querySelector('#error');