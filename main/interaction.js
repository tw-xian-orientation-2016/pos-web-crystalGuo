$(document).ready(function() {

  setCartTypes();
  setCartItemCount();
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

function setCartItemCount() {
  $('input[name="countText"]').change(function() {
    var count = $(this).val();
    var barcode = $(this).data('id');
    var cartItems = setCartItems(barcode, count);
    $("input[placeholder]").attr("placeholder", getTotalPrice(cartItems).toFixed(2));
  });
}
