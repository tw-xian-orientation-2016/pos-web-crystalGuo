function addToCartItems(barcode) {

  var cartItems = localStorage.getItem('cartItems');

  if (cartItems === null) {
    cartItems = [{ 'barcode': barcode, 'count': 1 }];
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  } else {
    setCartItems(barcode, JSON.parse(cartItems));
  }
}

function getCartItem(barcode, cartItems) {

  for (var index = 0; index < cartItems.length; index++) {
    if (cartItems[index].barcode === barcode) {
      return index;
    }
  }

  return -1;
}

function setCartItems(barcode, cartItems) {

  var index = getCartItem(barcode, cartItems);
  if (index === -1) {
    cartItems.push( { 'barcode': barcode, 'count': 1} );
  } else {
    cartItems[index].count ++;
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
