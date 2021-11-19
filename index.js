function render() {
    headerPage.render();
    productPage.render();
}

let CATALOG = [];

//server/catalog.json
//http://myjson.dit.upm.es/api/bins/96xx
fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        render();
    })
    .catch(error => {
        console.log(error);
    })