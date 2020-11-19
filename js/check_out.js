$(document).ready(function(){
  console.log("Here we Goo checkOut!!");
  var cartItem = localStorage.getItem("cartItem");
  console.log("cartItem: ",cartItem);
  if(cartItem === null){
    $('#shoppingList').append('<p>You nave not selected any items yet</p>')
  }else{
    var cartObj = JSON.parse(cartItem);
    var ul = $('#shoppingList ul');

    calAmt(cartObj);
    genItems(cartObj,ul)

    var li = $('li');
    for (i = 0; i < li.length; i++) {
      ul.on("click",'.add', function(e) {
        e.stopImmediatePropagation();
        console.log($(this).closest("li").index(),"add");
        cartObj[$(this).closest("li").attr('id')].qty++;
        calAmt(cartObj);
        genItems(cartObj,ul);
      });
      ul.on("click",'.remove', function(e) {
        e.stopImmediatePropagation();
        console.log($(this).closest("li").index(),"remove");
        cartObj[$(this).closest("li").attr('id')].qty--;
        calAmt(cartObj);
        genItems(cartObj,ul);
      });
    }
  }
})

function calAmt(cartObj){
  var amt = 0 
  for(var key of Object.keys(cartObj)){
    amt = amt + ((parseFloat(cartObj[key].price.replace(',',''))) * parseInt(cartObj[key].qty))
  }

  $('#totalAmt').text(`Total amount is GHS ${amt}`);
}

function genItems(obj,ul){
  ul.empty();
  for(var key of Object.keys(obj)){
    $('<li>').attr('id',key).text(key.replaceAll('_'," "))
    .append($('<span>').text(`Qty: ${obj[key].qty}`))
    .append($('<button>').attr('class','add').text("+"))
    .append($('<button>').attr('class','remove').text("-"))
    .appendTo(ul)
  }
}
// <li>Christina<button class="close">&times;</button></li>