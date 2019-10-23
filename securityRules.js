
service cloud.firestore {
  match /databases/{database}/documents {
    function isSignedIn(request) {
      return request.auth.uid != null;
    }

    match /products/{productId} {
      allow get, list: if true;
      allow create, update, delete: if false;
    }

    match /wishlist/{wishListId} {
      allow get, list, create, update, delete: if isSignedIn(request) &&
        resource.data.userId == request.auth.uid;
    }

    match /cart/{cartId} {
      allow get, list, create, update, delete: if isSignedIn(request) &&
        resource.data.userId == request.auth.uid;
    }
  }
}