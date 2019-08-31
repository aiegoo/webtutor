$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
}, function(){
     $("ul", $(this)).stop().slideUp();
});

var n = 0;
$(".btn-prev").click(function(){   
     if (n < 2) n++; 
     ani();
});

$(".btn-next").click(function(){   
     if (n > 0) n--;
     ani();
});


function ani(){
     $(".slide").stop().animate({"left": (-n*1000)+"px"}, 2000);
}

var Content = $(".content > div");
$(Content).hide();
$(Content).last().slideDown(800);
$(".tab-buttons span").click(function(){
     var Tabs = $(this).attr("class");
     $("#lamp").removeClass().addClass("#lamp").addClass(Tabs);
     $(Content).each(function(){
          if($(this).hasClass(Tabs)){
               $(this).fadeIn(800);
          }else{
               $(this).hide();
          }
     });
});