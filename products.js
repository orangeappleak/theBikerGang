(function() {
    var products_div = document.querySelector(".products");
    FirebaseService.getAllProducts().then(function(products){
        var html = "";
        var count3=0;
        Object.keys(products).forEach(function(key){
            html+=`<div class="product${count3}">
<h1 class="product_heading">${products[key].name}</h1>
<div class="images">
    <img class="product_image" src="${products[key].image}">
</div>
</div>`
            count3++;
        })
        document.getElementById("bikes").innerHTML = html;
    })
})();
