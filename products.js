(function() {
    var products_div = document.querySelector("#bike_products");
    FirebaseService.getAllProducts().then(function(products){
        var html = `<div id="overlay">
                        <img id="overlay_back" style="width: 200%;top: -10px; border-radius: 100px;"src="unsplash%20walls/overlay_back.jpg">
                        <div id="overlay_bike_products">
                            <h1 id="overlay_heading">Mountain Bikes</h1>
                        </div>
                    </div>`;
        var count3=0;
        Object.keys(products).forEach(function(key){
            html+=`<div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000" class="product${count3}">
<div class="images">
    <img class="product_image" src="${products[key].image}">
</div>
</div>`
            document.getElementById("bike_products").innerHTML = html;
            count3++;
        })
    })
})();


