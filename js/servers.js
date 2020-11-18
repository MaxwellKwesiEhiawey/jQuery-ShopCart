var cartItem = 0;
$(document).ready(function(){
  console.log("Here we Goo!!");
  $("#addToCart").click( function(){
    // cartItem++;
   var t = $(this).find('.servers-container .servers-shop .name').text();
   console.log(t)
  //  localStorage.setItem("cartItem", cartItem)
  }
  )
  
})