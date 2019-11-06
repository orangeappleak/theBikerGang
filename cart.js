function renderCart() {
  if(!FirebaseService.getCurrentUser()) {
    return;
  }
  var cart_div = document.querySelector("#cartlines");  
  FirebaseService.getCartLines().then(function(cartlines){
    FirebaseService.getAllProductsForIdList(Object.keys(cartlines).map(cartLineKey => cartlines[cartLineKey].productId))
      .then(function(products) {
        var html = "";
        Object.keys(cartlines).forEach(function(cartLineKey){
          html += `<li class="cartline" data-aos="fade-left" data-aos-duration="700">
  <span class="product">
    <span class="images">
      <img class="product_image" src="${products[cartlines[cartLineKey].productId].image}"/>
    </span>
    <h1 class="product_heading">${products[cartlines[cartLineKey].productId].name}</h1>
  </span>
  <span class="quantity">
    <div id="increase_quantity" onclick="FirebaseService.modifyQuantity('${cartLineKey}', ${(cartlines[cartLineKey].quantity > 1) ? cartlines[cartLineKey].quantity - 1 : cartlines[cartLineKey].quantity}).then(renderCart)"><h1 id="One">remove</h1><h1 id="Two">REMOVE</div>
    <span><div class="qty_no"><h1>${cartlines[cartLineKey].quantity}</h1></div></span>
    <div id="decrease_quantity" onclick="FirebaseService.modifyQuantity('${cartLineKey}', ${(cartlines[cartLineKey].quantity < 100) ? cartlines[cartLineKey].quantity + 1 : cartlines[cartLineKey].quantity}).then(renderCart)"><h1 id="add_One">add</h1><h1 id="add_Two">ADD</h1></div>
  </span>
  <span class="remove">
    <div id="remove_button" onclick="FirebaseService.removeFromCart('${cartLineKey}').then(renderCart)">DELETE ITEM</div>
  </span>
</li>`;
        });
        if(!Object.keys(cartlines).length) {
          html += "<li>No items in your cart yet!</li>";
        }
        document.getElementById("cartlines").innerHTML = html;
      })
      .catch(FirebaseService.__manageError);
  });
}

(function() {
  FirebaseService.on_current_userchange(renderCart);
})();
