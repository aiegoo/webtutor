$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
}, function(){
     $("ul", $(this)).stop().slideUp();
});

var n = 0;
var depth = 20;
(function ani(){
     $(".slide li").eq(n).css("z-index", depth++).fadeIn();
     $(".slide li").eq(n).fadeOut(3000, function(){
          n++;
          if(n = 2) n=0;
          ani();
     });
})();

var Contetn = $(".tab-body > div");
$(Content).hide();
$(Content).last().fadeIn(500);
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