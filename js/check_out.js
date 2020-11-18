
$(document).ready(function(){
  console.log("Here we Goo checkOut!!");
  var cartItem = localStorage.getItem("cartItem");
  console.log("cartItem: ",cartItem);
  $("#cartContent").text(cartItem);
})



// userId:[categories:[systems:{name, description, price}, networks, storage ]] 
//

