
firebase.initializeApp(firebaseConfig);

const FirebaseService = {
  // AUTHENTICATION
  createUser(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },
  signIn(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  on_current_userchange(callback) {
      !!callback && firebase.auth().onAuthStateChanged(callback); 
  },
  updateUserName(displayName) {
	  const currentUser = FirebaseService.getCurrentUser();
    if(!currentUser) {
      FirebaseService.__manageError('User not signed in: unable to update username');
      return Promise.reject('User not signed in: unable to update username');
    }
	
	  return currentUser.updateProfile({
		  displayName
	  });
  },
  signOut() {
    return firebase.auth().signOut();
  },
  getCurrentUser() {
    return firebase.auth().currentUser;
  },

  // DATABASE
  /**
   * GetAllProducts()
   * returns an object containing the products in following format :
   * {
   *  'productId1': {name: 'productName1', ...},
   *  'productId2': {name: 'productName2', ...},
   *  ...
   * }
   */
  getAllProducts() {
    return new Promise((resolve, reject) => {
      firebase.firestore().collection('products').get()
        .then(querySnapshot => {
          let products = {};
          querySnapshot.forEach(productDoc => products[productDoc.id] = productDoc.data());
          resolve(products);
        })
        .catch(e => FirebaseService.__manageErrorThenReject(e, reject));
    });
  },

  /**
   * getAllProductsForIdList()
   * retrieves all products which id is in the idList
   * returns an object containing the products in following format :
   * {
   *  'productId1': {name: 'productName1', ...},
   *  'productId2': {name: 'productName2', ...},
   *  ...
   * }
   * @param {string[]} productIdList : The id list of products to get
   */
  getAllProductsForIdList(productIdList) {
    var promises = [];
    var products = {};

    return new Promise((resolve, reject) => {
      productIdList.forEach(productId => promises.push(FirebaseService.getProduct(productId)));

      Promise.all(promises)
        .then(productDocs => {
          productDocs.forEach((productDoc) => products[productDoc.id] = productDoc.data())
          resolve(products);
        })
        .catch(e => FirebaseService.__manageErrorThenReject(e, reject));
    });  
  },

  /**
   * getProduct()
   * retrieve the product for the productId
   * returns the promise from firebase (id property and data() function is available on it)
   * @param {string} productId 
   */
  getProduct(productId) {
    return firebase.firestore().collection('products').doc(productId).get();
  },

  /**
   * getWishList()
   * returns the wishlist of the user in followins format:
   * {
   *  'wishlistId1': {productId: 'productId1', userId: 'wishlist user's id'},
   *  'wishlistId2': {productId: 'productId2', userId: 'wishlist user's id'},
   *  ...
   * }
   */
  getWishList() {
    const currentUser = FirebaseService.getCurrentUser();
    if(!currentUser) {
      FirebaseService.__manageError('User not signed in: unable to load wishlist');
      return Promise.reject('User not signed in: unable to load wishlist');
    }
    return new Promise((resolve, reject) => {
      firebase.firestore().collection('wishlist')
        .where('userId', '==', currentUser.uid).get()
        .then(querySnapshot => {
          let wishlist = [];
          querySnapshot.forEach(withListDoc => wishlist[withListDoc.id] = withListDoc.data());
          resolve(wishlist);
        })
        .catch(e => FirebaseService.__manageErrorThenReject(e, reject));
    });
  },
  /**
   * addToWishList()
   * Add the product corresponding to the productId passed to the wishlist of the connected user
   * @param {string} productId The productId to add to the wishlist of the connected user
   */
  addToWishList(productId) {
    const currentUser = FirebaseService.getCurrentUser();
    if(!currentUser) {
      FirebaseService.__manageError('User not signed in: unable to add to wishlist');
      return Promise.reject('User not signed in: unable to add to wishlist');
    }
    return firebase.firestore().collection('wishlist').add({
      userId: currentUser.uid,
      productId
    });
  },
  /**
   * removeFromWishList()
   * deletes the wishlistId. Security to not delete other user's wishlist is managed in firestore's security rules
   * @param {string} wishlistId : the wishlist id to delete
   */
  removeFromWishList(wishlistId) {
    const currentUser = FirebaseService.getCurrentUser();
    if(!currentUser) {
      FirebaseService.__manageError('User not signed in: unable to remove from wishlist');
      return Promise.reject('User not signed in: unable to remove from wishlist');
    }
    return firebase.firestore().collection('wishlist').doc(wishlistId).delete();
  },

  /**
   * getCartLines()
   * returns the cart in the following format for the connected user:
   * {
   *  'cartLineId1': {productId: 'productId1', userId: 'user's id', quantity: 2},
   *  'cartLineId2': {productId: 'productId2', userId: 'user's id', quantity: 1},
   *  ...
   * }
   */
  getCartLines() {
    const currentUser = FirebaseService.getCurrentUser();
    if(!currentUser) {
      FirebaseService.__manageError('User not signed in: unable to get cart');
      return Promise.reject('User not signed in: unable to get cart');
    }
    return new Promise((resolve, reject) => {
      firebase.firestore().collection('cartlines')
        .where('userId', '==', currentUser.uid).get()
        .then(querySnapshot => {
          let cartLines = [];
          querySnapshot.forEach(cartLineDoc => cartLines[cartLineDoc.id] = cartLineDoc.data());
          resolve(cartLines);
        })
        .catch(e => FirebaseService.__manageErrorThenReject(e, reject));
    });
  },
  /**
   * addCartLine()
   * add a cart line corresponding to the following product
   * @param {string} productId : the productId to add to cart
   * @param {number} quantity : the quantity of the product
   */
  addCartLine(productId, quantity) {
    const currentUser = FirebaseService.getCurrentUser();
    if(!currentUser) {
      alert('User not signed in: unable to add to cart');
      return Promise.reject('User not signed in: unable to add to cart');
    }
    return firebase.firestore().collection('cartlines').add({
      userId: currentUser.uid,
      productId,
      quantity
    });
  },
  /**
   * removeFromCart()
   * remove the cart line from the user's cart. Security is managed in firestore security rules to
   * avoid the user to delete other user's cart lines
   * @param {string} cartLineId 
   */
  removeFromCart(cartLineId) {
    const currentUser = FirebaseService.getCurrentUser();
    if(!currentUser) {
      FirebaseService.__manageError('User not signed in: unable to remove from cart');
      return Promise.reject('User not signed in: unable to remove from cart');
    }
    return firebase.firestore().collection('cartlines').doc(cartLineId).delete();
  },
  /**
   * modifyQuantity()
   * modify the quantity of the product for the cart line
   * @param {string} cartLineId 
   * @param {number} quantity 
   */
  modifyQuantity(cartLineId, quantity) {
    const currentUser = FirebaseService.getCurrentUser();
    if(!currentUser) {
      FirebaseService.__manageError('User not signed in: unable to modify quantity of cart');
      return Promise.reject('User not signed in: unable to modify quantity of cart');
    }
    return firebase.firestore().collection('cartlines').doc(cartLineId).update({quantity});
  },

  // ERROR MANAGEMENT
  __manageError(e) { console.error(e);
        if(e.message){
          alert(e.message);
      }},
  __manageErrorThenReject(e, reject) {
    console.error(e);
      if(e.message){
          alert(e.message);
      }
    reject(e);
  },
};

