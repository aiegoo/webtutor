$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
}, function(){
     $("ul", $(this)).stop().slideUp();
});

$(".bts a").click(function(){
     var n = $(this).index();
     $(".bts").css("color", "#fff");
     $(".bts").css("color", "#f30");
     $(".slide").animate({"left": (-n*1000)+"px"}, 500);
});

function popUp(){
     window.open("popup.html");
}