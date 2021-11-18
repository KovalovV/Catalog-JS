class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }

    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if(productsLocalStorage){
            return JSON.parse(productsLocalStorage);
        }
        return []
    }

    putProducts(id) {
        let products = this.getProducts();
        let isPushProduct = false;
        const indexOfAddItem = products.indexOf(id);
        if(!(indexOfAddItem + 1)) {
            products.push(id);
            isPushProduct = true;
        } else {
            products.splice(indexOfAddItem, 1);
        }
        localStorage.setItem(this.keyName, JSON.stringify(products));
        return {
            isPushProduct,
            products
        }
    }
 }

 const localStorageUtil = new LocalStorageUtil();