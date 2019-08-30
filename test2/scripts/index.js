$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
}, function(){
     $("ul", $(this)).stop().slideUp();
});

var n = 0;
(function ani(){
     $(".slide").delay(2000).animate({"left": "-=960px"}, 2000, function(){
          n++;
          if (n==5) {
               n = 0;
               $(this).css("left", "0px");
          }
          ani();
     });
})();

function modalOpen(){
     $("#modal-bg").show(0);
     $("#modal-wrap").css("display", "table-cell");
}

function modalClose(){
     $("#modal-bg").hide();
     $("#modal-wrap").css("display", "none");
}

function popUp(){
     window.open("contact.html", "win", "width=300, height=200, scrollbars=no, toolbar=no, menubar=no, status=no, location=no, resizable=no");
}

var tabBody = $(".content > div");
$(".content").hide();
$(".content").last().slideDown(500);
$(".tab-buttons span").click(function(){
     var Tabs = $("this").attr("class");
     $("#lamp").removeClass().addClass("#lamp").addClass(Tabs);
     $(".content").each(function(){
          if($(this).hasClass(Tabs)){
               $(this).fadeIn(800);
               alert("000000");
          }else{
               $(this).show();
               alert("1111111111");
          }
     });
});