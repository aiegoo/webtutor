$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
}, function(){
     $("ul", $(this)).stop().slideUp();
});

$(".btn-prev").click(function(){
     if (n>0) n--;
     ani();
});

$(".btn-next").click(function(){
     if (n<2) n++;
     ani();
});

var n = 2;
function ani(){
     $(".slide").stop().animate({"left": (-n*1000)+"px"}, 500);
}

function popUp(){
     window.open("popUp.html");
}