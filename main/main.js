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

function getCartItems(barcode, count) {

  var cartItems = JSON.parse(localStorage.getItem('cartItems'));

  for (var i = 0; i < cartItems.length; i++) {
    if (cartItems[i].barcode === barcode) {
      cartItems[i].count = count;
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;
    }
  }
}

function getItem(barcode) {

  var list = loadAllItems();

  for (var i = 0; i < list.length; i++) {
    if (barcode === list[i].barcode) {
      return list[i];
    }
  }

  return null;
}

function getTotalPrice() {

  var cartItems = JSON.parse(localStorage.getItem('cartItems'));
  var totalPrice = 0.00;

  for (var i = 0; i < cartItems.length; i++) {
    var item = getItem(cartItems[i].barcode);
    totalPrice += item.price * cartItems[i].count;
  }

  return totalPrice;

}


function generateReceipt() {

  var cartItemsInStorage = JSON.parse(localStorage.getItem('cartItems'));
  var cartItems = cartItemsInStorage;
  var list = JSON.parse(localStorage.getItem('list'));
  var date = new Date();
  var totalPrice = getTotalPrice();
  var receipt = { 'cartItems': cartItems, 'totalPrice':totalPrice, 'date':date };

  localStorage.clear('cartItems');

  return receipt;
}

function generateReceiptList() {
  var receiptList = localStorage.getItem('receiptList');
  var receipt = generateReceipt();

  if (receiptList === null) {
    var receiptList = [];
  } else {
    receiptList = JSON.parse(receiptList);
  }

  receiptList.push(receipt);
  localStorage.setItem('receiptList', JSON.stringify(receiptList));
}
