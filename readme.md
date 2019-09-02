# WebTest Schedule

## Summary before you go to the test center

###
`symbols`
> `&#11044;` for large circle
> `&#8592;` for left arrow
> `&#8594;` for right arrow
> `&#8595;` for down arrow
> `&#8678;` for left white arrow

`emmet for modal`
> `#modal-bg+#modal-wrap>#modal-body>#modal-content>.tab-wrap <br>
> `#modal-bg+#modal-wrap>#modal-body>#modal-content>table.modal-table>tr*2>td{0 제목}+td{lorem}^^.button.modal-button>a{Close} <br>
`emmet for login form`
> `#login.login>.login-title+.login-content>.input-name>h2^input.field-input+.input-name>h2^button.submit-btn <br>
`emmet for tabs`
> .tabs>.tab-buttons>span*3.content${form$}+#lamp.content1^.content>div*3.content$>form <br>
`emmet for submenu-bg`
> .wrap>.header>.logo>img^.navs>.nav>div*4{MENU $$}^.submenu>.submenu-bg>ul*4>li*3{submenu $} <br>
> .wrap>.header>.logo>img^div.navs>.nav>div{MENU0$}*4^div.submenu>.sub-bg>ul*4>li{submenu$}*4 <br>
`emmet for normal header`
> .wrap>header.clear.wrap>.logo>img^.navs>.nav>div+ulli*3>a <br>


`jquery`
> href="javascript: modalClose();" <br>
> onclick="alert('sent succesfully'); self.close();"<br>

> slide buttons
```
$(".bts").click(function(){
     var n = $(this).index();
     $(".bts a").css({"color": "#fff"});
     $(".bts a").eq(n).css("color", "#f30");
     $(".slide").stop().animate({"left": (-n*1000+"px")}, 2000);
```
> Tab 
```
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
               $(this).hide()
```
> fade banner
```
var i = 0;
var depth = 20;
(function gallery(){
      $(".gallery-wrap li").eq(i).css("z-index", depth++).fadeOut(0);
      $(".gallery-wrap li").eq(i).delay(2000).fadeIn(2000, function(){
            if (i == 2) i = 0;
            else i++;
            gallery();
```
> slide button
```
$(".btn-next").click(function(){
     if(n < 2) n++;
     ani();
function ani() {
     $(".slide").stop().animate({"left": (-n*1000)+"px"}, 2000);
```
> normal slide banner
```
var n = 0;
(function ani(){
     $(".slide").delay(2000).animate({"left": "-=1000px"}, 2000, function(){
          n++;
          if (n == 3) {
               n = 0;
               $(this).css("left", "0px");
          }
          ani()
```
> side menu
```
$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
     /* $(".navs", $(this)).css("z-index", "9999"); */
}, function(){
     $("ul", $(this)).stop().slideUp();
```
`CSS Notabble`
> tab css
```
.tab-wrap {width: 45%; float: left;}
.tabs {width: 100%; height: 200px; margin: 20px auto; position: relative;}
.tab-buttons {border-right: 2px solid white;}/* make it work plz */
.tab-buttons span {  background: coral; cursor: pointer; width: 33.33%; float: left; text-align: center; line-height: 40px; }
/* .tab-buttons span {font: 400 0.9rem 'open sans', sans-serif; color: #000; background: coral; cursor: pointer; display: block; width: 33.33%; float: left; text-align: center; line-height: 40px;box-shadow: -10px -10px 25px 3px rgba(0,0,0,0.5)} */
.tab-content {border-bottom: 3px solid #ddd; background: #eee; display: inline-block;}

#lamp {width: 33.33%; height: 2px; background: #333; display: block; position: absolute; top: 40px; }
#lamp.content2 {left: 33.33%;}
#lamp.content3 {left: 66.66%;}
#lamp.content1 {left: 0; }
.tab-wrap {width: 100% !important;float: left;}
.span.close{top: 10px;position: absolute;right: 20px;cursor: pointer;}
```
> modal css
```
#modal-bg {width: 100%; height: 100%; background: rgba(0,0,0,0.7); top: 0; left: 0; z-index: 9999; position: absolute;display: none;}
#modal-wrap {width: 100%; height: 100%; top: 0; left: 0; z-index: 9999; position: absolute; display: table-cell; display: none;}
#modal-body {background:rgba(255, 255, 255, 0.8); width: 400px; height: 400px; top: 50%; left: 50%;transform: translate(-50%, -50%);  position: fixed; vertical-align: middle; text-align: center; line-height: 30px;}
#modal-content { margin-top: 30px;}
```


## Final countdown to Test

`Sep 2 Test5 index1 on Tony` 
> practice on modal with tabs
> begins modifying original at 12:07 AM
> tag css and jquery force complete not working at 12:50 PM

`Sep 2 Test4 index1 on Tony`
> working on the modal with naomi

`Sep 1 Test6 Index on Final`
> begins at 8:13 PM for boiler plates
> finishes html tags at 8:51 PM
> finishes nav bar css js at 9:27 PM
> finishes banner and slide-button at 9:45 PM
> finishes tabs at 10:36 PM
> finishes css and js for main parts at 10:59 PM

`Sep 1 Test5 Index2 on Final`
> begins at 2:24 PM 
> finishes html tags at 2:46 PM
> fixes .slide-button bugs with dots for test5
> break for snacs and chats for half an hour
> complete Test5 at 5:32 PM

`Sep 1 Test Index on naomi`
> fix the nav banner issues and add tabs to replace partner

`Sep 1 Test4 Index2 on Final`
> begins at 8:50 AM
> finishes html tags at 9:42 AM
> complete the test4 at 11:59 AM

`Aug 31 Test3 Index2 on Final` 
> begins at 9:20 PM ||
> finishes tags at 9:46 PM \
> paused at 11:19 PM due to the sleep depreviation
> resumed at 6:50 and finishes at 7:31 AM

`Aug 31 Test2 Index2 on Final`
> begins at 6:23 PM  || html tag finished at 6:53 PM || finishes css and jquery at 8:29 PM
> ** finetuning of tabs css is neccesary.



`Aug 31 Test1 Index2 on Final`
> today Aug 31 on Index2.html of test1 on Final \
*** begins at 12:50, ends at 3:50pm <br> with submenu z-index issues and icon-button layout. Modal/popUp not on the agenda.address

