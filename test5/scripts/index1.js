$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
}, function(){
     $("ul", $(this)).stop().slideUp();
});

$(".bts").click(function(){
     var n = $(this).index();
     $(".bts a").css("color", "#fff");
     $(".bts a").eq(n).css("color", "#f30");
     $(".slide").animate({"left": (-n*1000)+"px"}, 500);
});

function popUp(){
     window.open("popup.html");
}

var Content = $(".content > div");
$(Content).hide();
$(Content).slideDown(500);
$("tab-buttons span").click(function(){
     var Tabs = $(this).attr("class");
     $("#lamp").removeClass().addClass("#lamp").addClass(Tabs);
     $(Content).each(function(){
          if($(this).hassClass(Tabs)){
               $(this).fadeIn(800);
          }else{
               $(this).hide();
          }
     });
});

function modalOpen(){
     $("#modal-bg").show(500);
     $("#modal-wrap").css("display", "table");
}
function modalClose(){
     $("#modal-bg").hide();
     $("#modal-wrap").css("display", "none");
}

