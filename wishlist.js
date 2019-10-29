function renderWishlist() {
  if(!FirebaseService.getCurrentUser()) {
    console.warn('Can\'t render wishlist: no user yet');
    return;
  }
  var wishlist_div = document.querySelector("#wishlist");
  FirebaseService.getWishList().then(function(wishlistLines){
    FirebaseService.getAllProductsForIdList(Object.keys(wishlistLines).map(wishlistLineKey => wishlistLines[wishlistLineKey].productId))
      .then(function(products) {
        var html = "";
        Object.keys(wishlistLines).forEach(function(wishlistLineKey){
          html+=`<li class="wishlist_line">
  <span class="product">
    <span class="images">
      <img class="product_image" src="${products[wishlistLines[wishlistLineKey].productId].image}" />
    </span>
    <h1 class="product_heading">${products[wishlistLines[wishlistLineKey].productId].name}</h1>
  </span>
  <span class="remove">
    <button onclick="FirebaseService.removeFromWishList(${wishlistLineKey})">X</button>
  </span>
</li>`;
        });
        if(!Object.keys(wishlistLines).length) {
          html += "<li>No items in your wishlist yet!</li>";
        }
        wishlist_div.innerHTML = html;
      })
      .catch(FirebaseService.__manageError);
  });
}

(function() {
  FirebaseService.on_current_userchange(renderWishlist);
})();
