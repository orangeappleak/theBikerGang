function renderCart() {
  if(!FirebaseService.getCurrentUser()) {
    console.warn('Can\'t render cart: no user yet');
    return;
  }
  var cart_div = document.querySelector("#cartlines");
  FirebaseService.getCartLines().then(function(cartlines){
    FirebaseService.getAllProductsForIdList(Object.keys(cartlines).map(cartLineKey => cartlines[cartLineKey].productId))
      .then(function(products) {
        var html = "";
        Object.keys(cartlines).forEach(function(cartLineKey){
          html += `<li class="cartline">
  <span class="product">
    <span class="images">
      <img class="product_image" src="${products[cartlines[cartLineKey].productId].image}" />
    </span>
    <h1 class="product_heading">${products[cartlines[cartLineKey].productId].name}</h1>
  </span>
  <span class="quantity">
    <button onclick="FirebaseService.modifyQuantity('${cartLineKey}', ${(cartlines[cartLineKey].quantity > 1) ? cartlines[cartLineKey].quantity - 1 : cartlines[cartLineKey].quantity})">-</button>
    <span>${cartlines[cartLineKey].quantity}</span>
    <button onclick="FirebaseService.modifyQuantity('${cartLineKey}', ${(cartlines[cartLineKey].quantity < 100) ? cartlines[cartLineKey].quantity + 1 : cartlines[cartLineKey].quantity})">+</button>
  </span>
  <span class="remove">
    <button onclick="FirebaseService.removeFromCart('${cartLineKey}')">X</button>
  </span>
</li>`;
        });
        if(!Object.keys(cartlines).length) {
          html += "<li>No items in your cart yet!</li>";
        }
        cart_div.innerHTML = html;
      })
      .catch(FirebaseService.__manageError);
  });
}

(function() {
  FirebaseService.on_current_userchange(renderCart);
})();
