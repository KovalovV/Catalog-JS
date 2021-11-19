class Products {

    constructor() {
        this.activeButton = 'product-item__btn_active';
        this.textAddToCart = 'Add to cart';
        this.textRemoveFromCart = 'Remove from cart';
    }

    setItemLocationStorage(element, id, name, img, price) {
        const { isPushProduct, products } = localStorageUtil.putProducts(id, name, img, price);

        if(isPushProduct) {
            element.classList.remove(this.activeButton);
            element.innerText = this.textRemoveFromCart;
        } else {
            element.classList.add(this.activeButton);
            element.innerText = this.textAddToCart;
            console.log('chage');
        }

        headerPage.render(products.length);
    }

    render() {
        const productsStore = localStorageUtil.getProducts();

        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, img, price }) => {
            let activeBtnClass = ' ' + this.activeButton;
            let activeBtnText = this.textAddToCart;

            if(indexOfArrayObj(productsStore, function (item) { 
                return item.id == id;
            }) + 1) {
                activeBtnClass = ' ';
                activeBtnText = this.textRemoveFromCart;
            }

            htmlCatalog += `
                <li class="product-item">
                    <span class="product-item__name">${name}</span>
                    <img class="product-item__img" src="${img}" alt="Phone">
                    <span class="product-item__price">${price.toLocaleString()} грн</span>
                    <button class="product-item__btn${activeBtnClass}" onclick = "productPage.setItemLocationStorage(this, '${id}', '${name}', '${img}', '${price}')">${activeBtnText}</button>
                </li>
            `;
        })

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productPage = new Products();