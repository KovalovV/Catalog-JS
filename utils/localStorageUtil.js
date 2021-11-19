class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }

    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage) {
            return JSON.parse(productsLocalStorage);
        }
        return []
    }

    putProducts(id, name, img, price) {
        let products = this.getProducts();
        let isPushProduct = false;
        
        const indexOfAddItem = indexOfArrayObj(products, function (item) { 
            return item.id == id;
        });

        if (!(indexOfAddItem + 1)) {
            products.push({
                id,
                name,
                img,
                price
            });
            isPushProduct = true;
        } else {
            products.splice(indexOfAddItem, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(products));
        console.log(isPushProduct);
        return {
            isPushProduct,
            products
        }
    }
}

const localStorageUtil = new LocalStorageUtil();