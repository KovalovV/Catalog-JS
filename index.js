function render() {
    headerPage.render();
    productPage.render();
}

loader.render();

let CATALOG = [];

//server/catalog.json
//http://myjson.dit.upm.es/api/bins/96xx
fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        loader.handleCloseLoader();
        render();
    })
    .catch(error => {
        loader.handleCloseLoader();
        errorPage.render();
    })