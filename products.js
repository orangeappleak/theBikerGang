(function() {
    var products_div = document.querySelector("#products");
    FirebaseService.getAllProducts().then(function(products){
        var html = "";
        Object.keys(products).forEach(function(key){
            html+=`<div class="product">
<div id="images">
    <img class="product_image" src="${products[key].image}">
    <div id="links">
    <a id="buynow">Buy Now<>
</div>
</div>
<h1 id="product_heading">${products[key].name}</h1></div>`
        })
        products_div.innerHTML = html;
    })
})();
