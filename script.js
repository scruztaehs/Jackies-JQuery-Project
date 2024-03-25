$(".Part-Two-Yes").hide();
$(".yes-button").click(function(){
    $(".Part-Two-Yes").show();
    $(".enter").hide();
    
});

$(".no-button").click(function() {
    $(".enter").hide();
    $(".enter1").show();
  
  
});

$(".no").dblclick(function(){
    $(".enter").show();
    $(".enter1").hide();
    
});
$(".map1").click(function(){
    
});
$(".map2").click(function(){
   
   
   
    $(".end").slideDown("slow");
    
});
$(".fly").mouseenter(function(){
   
});
$(".fly").dblclick(function(){
   
});
$(".fly").mouseleave(function(){
    
});
$(".hide").click(function(){

});
$(".badbunny-img").dblclick(function(){
  $(".Part-Two-Yes").hide();
  $(".Part-Three-Yes").slideDown("slow");
   
});
$(".baddie").hover(function(){
    $(".Thanks-end").show();
    $(".Part-Three-Yes").hide();
});
$(".pierce-img").dblclick(function(){
  $(".Part-Two-Yes").hide();
  $(".Part-Four-Yes").slideDown("slow");
});
$(".tyler-img").mouseenter(function(){
    $(".Thanks-end").show();
    $(".Part-Five-Yes").hide();
});
$(".tyler").dblclick(function(){
  $(".Part-Two-Yes").hide();
  $(".Part-Five-Yes").slideDown("slow");
});
$(".emo-img").mouseleave(function(){
    $(".Thanks-end").show();
    $(".Part-Four-Yes").hide();
});
$(".Thanks-end").dblclick(function(){
    $(".Thanks-end").hide();
    $(".enter").show();
    
    
});
