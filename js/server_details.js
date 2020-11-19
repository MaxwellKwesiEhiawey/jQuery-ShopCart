var cartItem = 0;
$(document).ready(function(){
  var cartItem = localStorage.getItem('cartItem');
  console.log("cartItem: ",cartItem);
  if (cartItem === "4"){ 
    localStorage.setItem("cartItem", null);
  }
  $('#cartItem').text((cartItem === null)? 0: Object.keys(JSON.parse(cartItem)).length);
  $("#addToCart").click( function(){
   var name = $(this).parent().find('.name').text().replaceAll(" ", "_");
   console.log('name: ',name.replaceAll(" ", "_"));

   var price = $(this).parent().find('.price').text().split(" ")[1];
   
   console.log("cartItem: ",cartItem);
   if(cartItem === null){
     cartItem = {[name]:{'price':price,'qty':1}};
     localStorage.setItem('cartItem',JSON.stringify(cartItem));
   }else{
    var cartObj = JSON.parse(cartItem);
    var newCartItem;
    if(name in cartObj){
      cartObj[name].qty++;
      newCartItem = cartObj;
    }else{
      var newObj = {[name]:{'price':price,'qty':1}}
      newCartItem = $.extend(cartObj,newObj);
    }
    localStorage.setItem('cartItem',JSON.stringify(newCartItem));
   }
   $('#cartItem').text((cartItem === null)? 0: Object.keys(JSON.parse(cartItem)).length);
  });
  $("#cartItem").click(function(event){
    event.preventDefault();
      console.log("cartItem button click");
        window.location.href="../html/check_out.html";
      })
})