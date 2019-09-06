$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
}, function(){
     $("ul", $(this)).stop().slideUp();
});

var n = 0;
var depth = 100;
(function ani(){
     $(".slide li").eq(n).css("z-index", depth++).fadeOut(0);
     $(".slide li").eq(n).delay(2000).fadeIn(3000, function(){
          n++;
          if(n==3) n=0;
               ani();          
     });
})();

/* var m = 0;
   (function aniSmall(){
     $(".slide2 li").eq(m).fadeOut(0).css("z-index", depth++);
     $(".slide2 li").eq(m).fadeIn(3000);
     $(".slide2 li").each(function(){
          m++;
          if(m==1) m=0;
          aniSmall();
     });
})(); */

var x = 0;
$(".bts").click(function(){
     Evt.preventDefault();
     $(".bts a").eq(x).css("color", "#000");
     $(".bts a").eq(x).css("color", "#f30");
     $(".slide2 li").animate({"left": (-n*400)+"px"}, 2000);
});

var Content = $(".tab-body > div");
$(Content).hide();
$(Content).slideDown(500);
$(".tab-button span").click(function(){
     var Tabs = $(this).attr("class");
     $("#lamp").removeClass().addClass("#lamp").addClass(Tabs);
     $(Content).each(function(){
          if($(this).hasClass(Tabs)){
               $(this).fadeIn(2000);
          }else{
               $(this).hide();
          }
     });
});

function modalOpen(){
     $("#modal-bg").show();
     $("#modal-wrap").css("display", "block");
}

function modalClose(){
     $("#modal-bg").hide();
     $("#modal-wrap").css("display", "none");
}

function popUp(){
     window.open("popUp.html", "popup");
}