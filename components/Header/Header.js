class Header {

    constructor() {
        this.activeButton = 'product-item__btn_active';
        this.textAddToCart = 'Add to cart';
        this.textRemoveFromCart = 'Remove from cart';
    }

    showCart() {
        cartPage.render()
    }

    render(count = 0) {
        const products = localStorageUtil.getProducts(); 
        const countOfProducts = count || products.length;

        const html = `
        <div class="header-container">
            <h1>My shope</h1>
            <span class="cart-count" onclick="headerPage.showCart()">
                <img src="../img/carts.png" alt="cart" class="cart-count__img">
                <span class="cart-count__count">${countOfProducts}</span>
            </span>
        </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();