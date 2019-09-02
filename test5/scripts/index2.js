$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
}, function(){
     $("ul", $(this)).stop().slideUp();
});

$(".bts").click(function(){
     var n = $(this).index();
     $(".bts a").css("color", "#fff");
     $(".bts a").eq(n).css("color", "#f30");
     $(".slide").stop().animate({"left": (-n*1000)+"px"}, 2000);
});

var Content = $(".content > div")
$(Content).hide();
$(Content).last().slideDown(500);
$(".tab-button span").click(function(){
     var Tabs = $(this).attr("class");
     $("#lamp").removeClass().addClass("#lamp").addClass(Tabs);
     $(Content).each(function(){
          if($(this).hasClass(Tabs)){
               $(this).fadeIn(800);
          }else{
               $(this).hide();
          }
     });
});`