(function() {
    var products_div = document.querySelector("#bike_products");
    FirebaseService.getAllProducts().then(function(products){
        var html = "";
        var count3=0;
        Object.keys(products).forEach(function(key){
            html+=`<div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000" class="product${count3}">
<div class="images">
<div class="product_name"><h1>${products[key].name}</h1></div>
    <img class="product_image" src="${products[key].image}">
<div class="buy_now" onclick="buy_now()"><h1>BUY NOW</h1></div>
<div class="add_to_cart" onclick="FirebaseService.addCartLine('${key}',1);"><h1>ADD TO CART</h1></div>
</div>
</div>`
            document.getElementById("bike_products").innerHTML = html;
            count3++;
        })
    })
})();


