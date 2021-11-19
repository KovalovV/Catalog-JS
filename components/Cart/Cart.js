class Cart {
    handleCloseCart() {
        ROOT_CART.innerHTML = '';
    }

    render() {
        const cartProducts = localStorageUtil.getProducts();
        let cartPrice = 0;
        let htmlCart = '';

        cartProducts.forEach(({ id, name, img, price }) => {
            htmlCart += `
                <li class="cart-product-item">
                    <div class="cart-product-item-description">
                        <span class="cart-product-item-description__name">${name}</span>
                        <p class="cart-product-item-description__price">${price.toLocaleString()} грн</p>
                    </div>
                    <img class="cart-product-item__img" src="${img}" alt="Phone">
                </li>
            `;

            cartPrice += Number(price);
        })

        const html = `
            <div class="cart-wrapper">
                <div class="cart-form">
                    <span class="cart-form__close" onclick="cartPage.handleCloseCart()">x</span>
                    <div class="cart-form__list">
                        <ul>
                            ${htmlCart}
                        </ul>
                    </div>
                    <div class="cart-form__price">
                        <p>Total price: ${cartPrice.toLocaleString()} грн</p>
                    </div>
                </div>
            </div>
        `;

        ROOT_CART.innerHTML = html;
    }
}

const cartPage = new Cart();