class Products {

    render() {
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, img, price }) => {
            htmlCatalog += `
                <li class="product-item">
                    <span class="product-item__name">${name}</span>
                    <img class="product-item__img" src="${img}" alt="Phone">
                    <span class="product-item__price">${price}</span>
                    <button class="product-item__btn">Add to korzina</button>
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
productPage.render();