$("#sun").animate({
    left: "20%"
},1000);
$("#sun").animate({
    left: "70%"
},8000);

$(".img").click(function(){
  $(this).fadeOut(1000);
  $(this).fadeIn(2000);  
});

$("#cow-dancing").show().delay(1000).animate({
    left: "50%"
},3000);

$("#grass").click(function() {
    $(this).css("background-color", "yellow");
    $(this).fadeOut(1000);
  	$(this).fadeIn(2000);
    $(this).html("Join the Party!");
});