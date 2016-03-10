$(document).ready(initialReceipt);

function initialReceipt() {

  var receiptList = JSON.parse(localStorage.getItem('receiptList'));
  var lastIndex = receiptList.length -1;
  var receipt = receiptList[lastIndex];

  createTable(receipt.cartItems);
  $("input[placeholder]").attr("placeholder", receipt.totalPrice.toFixed(2));
}

function createTable(cartItems) {

  for (var i = 0; i < cartItems.length; i++)
     {
        var tr=$('<tr></tr>');
        tr.appendTo($('table'));

        var item = getItem(cartItems[i].barcode);
        var td = $('<td>' + item.name + '</td>');
        td.appendTo(tr);

        td = $('<td>' + item.price.toFixed(2) + '/' + item.unit + '</td>');
        td.appendTo(tr);
        td = $('<td>' + cartItems[i].count + '</td>');
        td.appendTo(tr);
     }
}
