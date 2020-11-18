var cartItem = 0;
$(document).ready(function(){
  console.log("Here we Goo!!");
  $("#addToCart").click( function(){
    cartItem++;
    console.log(cartItem);
   localStorage.setItem("cartItem", cartItem)
  }
  )
  
})