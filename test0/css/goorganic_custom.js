$(function(){
	
$(".nav>li").mouseover(function(){
  $(this).children(".submenu").stop().slideDown();
});
$(".nav>li").mouseleave(function(){
  $(this).children(".submenu").stop().slideUp();
});


setInterval(function(){
	ani();
      }, 5000);
	function ani(){
		$('.BannerWrap ul').animate({"marginLeft":"-=960"}, 500, function(){
			$(">li:first-child",this).appendTo($(this));
			$(this).css({"marginLeft":-960});
		});
	};
/*
start();
var imgs = 2;
var now = 0;
function start(){
  $(".imgs>img").eq(0).siblings().css({"margin-left":"-2000px"});
  setInterval(function(){slide();},7000);
}
function slide(){
  now = now==imgs?0:now+=1;
  $(".imgs>img").eq(now-1).css({"margin-left":"-2000px"});	
  $(".imgs>img").eq(now).css({"margin-left":"0px"});
}
*/
var win;
 function winOpen(){
 win = window.open('contact.html','child','toolbar = no, location= no , status = no, menubar = no, resizable = no , scrollbars = no, width = 500, height = 300')
};
	
	     $("#topButton").click(function(e) {

            $('body, html').animate({scrollTop:0}, 200);

        });  ////click

   $("header  a").click(function(e) {

    e.preventDefault();

   var x = $(this).attr('href'); 

           $('body, html').animate({scrollTop: $(x).offset().top });

        }); ////click

 

  $(window).scroll(function(e) {

            if($(window).scrollTop() > 0){

   $('header').addClass('slide');

   }else{

   $('header').removeClass('slide');

   }

        });
});// JavaScript Document