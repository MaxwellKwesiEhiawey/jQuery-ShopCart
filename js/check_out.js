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
        console.log($(this).closest("li").find(".box").val(),"add");
        var boxInput = $(this).closest("li").find(".box").val();
        console.log("boxIput", boxInput);
        if ( boxInput >=0 && boxInput!=="") cartObj[$(this).closest("li").attr('id')].qty = boxInput;
        // cartObj[$(this).closest("li").attr('id')].qty++;
        calAmt(cartObj);
        genItems(cartObj,ul);
      });
      // ul.on("click",'.remove', function(e) {
      //   e.stopImmediatePropagation();
      //   console.log($(this).closest("li").index(),"remove");
      //   var content = cartObj[$(this).closest("li").attr('id')].qty; 
      //   if (content >0){ content--;
      //     cartObj[$(this).closest("li").attr('id')].qty = content
      //   };
      //   calAmt(cartObj);
      //   genItems(cartObj,ul);
      // });
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
    .append($('<span>').text(`Qty: `))
    .append($("<input>").attr('type','number').attr("class","box").attr("value",`${obj[key].qty}`).attr("min","0"))
    .append($('<button>').attr('class','add').text("add"))
    // .append($('<button>').attr('class','add').text("+"))
    // .append($('<button>').attr('class','remove').text("-"))
    .appendTo(ul)
  }
}
// <li>Christina<button class="close">&times;</button></li>