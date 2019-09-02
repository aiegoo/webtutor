$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
}, function(){
     $("ul", $(this)).stop().slideUp();
});


var n = 0;
(function ani(){
     $(".slide").delay(2000).animate({"left": "-=1000px"}, 2000, function(){
          n++;
          if (n == 3) {
               n = 0;
               $(this).css("left", "0px");
          }
          ani();
     });
})();

var Content = $(".content > div");
$(Content).hide();
$(Content).last().slideDown(500);
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

function modalOpen(){
     $("#modal-bg").show(500);
     $("#modal-wrap").css("display", "block");
}
function modalClose(){
     $("#modal-bg").hide();
     $("#modal-wrap").css("display", "none");
     
}