$(document).ready(initialList);

function initialList() {

  if (!localStorage.getItem('list')) {
    localStorage.setItem('list', JSON.stringify(loadAllItems()));
  }

  var list = JSON.parse(localStorage.getItem('list'));

  createTable(list);
}

function createTable(list) {

  for (var i = 0; i < list.length; i++)
     {
        var tr=$('<tr></tr>');
        tr.appendTo($('table'));

        var td = $('<td>' + list[i].name + '</td>');
        td.appendTo(tr);
        td = $('<td>' + list[i].price.toFixed(2) + '/' + list[i].unit + '</td>');
        td.appendTo(tr);
        td = $('<td>' + '<input type = "button" name = "addButton" data-id = "' + list[i].barcode +
        '" value = "addToCart"/>' + "</td>");
        td.appendTo(tr);
     }
}
