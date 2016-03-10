$(document).ready(initialList);

function initialList() {

  var receiptList = JSON.parse(localStorage.getItem('receiptList'));

  createTable(receiptList);
}

function createTable(receiptList) {

  for (var i = 0; i < receiptList.length; i++)
     {
        var tr=$('<tr></tr>');
        tr.appendTo($('table'));

        var td = $('<td>' + receiptList[i].date.toString() + '</td>');
        td.appendTo(tr);
        td = $('<td>' + receiptList[i].totalPrice.toFixed(2)  + '</td>');
        td.appendTo(tr);
        td = $('<td>' + '<input type = "button" name = "go" data-date = "' + receiptList[i].date +
        '" value = "goToReceipt"/>' + "</td>");
        td.appendTo(tr);
     }
}
