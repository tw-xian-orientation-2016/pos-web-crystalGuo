$(document).ready(function() {

  setCartTypes();
  setCartItemCount();
  jumpToCart();
  jumpToReceipt();
});

function setCartTypes() {
  var cartItems = JSON.parse(localStorage.getItem('cartItems'));

  if (cartItems) {
    $('.badge').text(cartItems.length);
  }

  $('input[name="addButton"]').click(function() {
    var barcode = $(this).data('id');
    addToCartItems(barcode);
    var cartItems = JSON.parse(localStorage.getItem('cartItems'));

    if (cartItems) {
      $('.badge').text(cartItems.length);
    }
  });
}

function jumpToCart() {
  $('#cartJumping').click(function() {
    location.href = '../page/cart.html';
  });
}

function setCartItemCount() {
  $('input[name="countText"]').change(function() {
    var count = $(this).val();
    var barcode = $(this).data('id');
    var cartItems = setCartItems(barcode, count);
    $("input[placeholder]").attr("placeholder", getTotalPrice(cartItems).toFixed(2));
  });
}

function jumpToReceipt() {
  $('#checkout').click(function() {
    generateReceiptList();
    location.href = '../page/receipt.html'
  });
}
