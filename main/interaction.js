$(document).ready(function() {
  
  setCartTypes();
});

function setCartTypes() {
  var cartItems = JSON.parse(localStorage.getItem('cartItems'));

  $('.badge').text(cartItems.length);

  $('input[name="addButton"]').click(function() {
    var barcode = $(this).data('id');
    addToCartItems(barcode);
    var cartItems = JSON.parse(localStorage.getItem('cartItems'));

    $('.badge').text(cartItems.length);
  });
}
