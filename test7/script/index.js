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

/* (function ani(){
     $(".slide li").eq(n).fadeOut(0).css("z-index", depth++);
     $(".slide li").eq(n).fadeIn(3000);
     $(".slide li").each(function(){
          n++;
          if(n==2) n=0;
          ani();
     });
})(); */

var i = 0;
$(".bts").click(function(){
     $(".bts a").eq(i).css("color", "#fff");
     $("span a").eq(i).css("color", "#f30");
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