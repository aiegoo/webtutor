$(".navs").hover(function(){
     $("ul", $(this)).stop().slideDown();
}, function(){
     $("ul", $(this)).stop().slideUp();
});

var n = 0; 
$(".btn-next").click(function(){
     if (n < 2) n++;
     ani();
});

$(".btn-prev").click(function(){
     if (n > 0) n--;
     ani();
});

function ani(){
     $(".slide").stop().animate({"left": (-n*1000)+"px"}, 2000;
}