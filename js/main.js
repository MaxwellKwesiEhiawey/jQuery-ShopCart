
$(document).ready(function(){
  console.log("Here we Goo!!");
  var cartItem = localStorage.getItem("cartItem");
  console.log("cartItem: ",cartItem);
  $("#cartItem").text(cartItem);
  $("#cartItem").click(function(event){
event.preventDefault();
  console.log("cartItem button click");
    window.location.href="../html/check_out.html";
  })
})
