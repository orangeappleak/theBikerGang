(function() {
    var products_div = document.querySelector("#products");
    FirebaseService.getAllProducts().then(function(products){
        var html = "";
        Object.keys(products).forEach(function(key){
            html+=`<div class="product">${products[key].name}
<img class="product_image" src="${products[key].image}"></div>`
        })
        products_div.innerHTML = html;
    })
})();
