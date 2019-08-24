$(".nav").hover(function(){
          $("ul", $(this)).stop().slideDown();
}, function(){
          $("ul", $(this)).stop().slideUp();
});

var n = 0;
(function ani(){
          $(".slide").delay(2000).animate({"left": "-=960px"}, 2000, function(){
                    n++;
                    if (n==3){
                              n = 0;
                              $(this).css("left", "0px");
                    }
                    ani();
          });
})();