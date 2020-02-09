/* #####################################Start Main Page######################################### */
//---------------------------------------Start top-bar
/* $(".fixed-icone-toggle").click(function() {
    $(".top-bar").slideToggle();
    $(".fixed-icone-toggle i").toggleClass("fa-chevron-up fa-chevron-down");
});
 */
//---------------------------------------Start Navbar
var secondTobBarHeight = $(".second-tob-bar").innerHeight();

$(window).on("scroll", function() {

    if ($(window).scrollTop() > 40) {
        $(".navbar,.second-tob-bar").addClass("fixed-top");

    } else {
        $(".navbar,.second-tob-bar").removeClass("fixed-top");
    }
});

//---------------------------------------DISPLAY SEARCH
/* $(".topbar-toggle .fa-search").click(function() {
    $('.drop-menu').fadeIn()
}, (function() {
    $(this).animate({
        width: '100'
    }, 3000);
}));


$(function() {
    $('html').click(function(e) {
        if (e.target.id !== 'link') {
            $('.drop-menu').fadeOut();
            $(this).animate({
                width: '0'
            }, 3000);
        }
    });
});*/

/* ##################################### End Main Page ######################################### */

/* #####################################Start Product Page######################################### */

//---------------------------------------Shuffle Section

 $('.showSingle').click(function() {
         $(this).addClass("active").siblings().removeClass("active");
     })
/* msh 3rfa homa msh 3'len 3'er 3 awl w7da leeh*/


 $(function() {
     $('.targetDiv').hide();
     $('.targetDiv.active').show();
     $('.showSingle').click(function() {
         $('.targetDiv').hide();
         $('#div' + $(this).attr('target')).show();
     });
 });

//---------------------------------------ZOOM Section
function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /*create lens:*/
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /*insert lens:*/
    img.parentElement.insertBefore(lens, img);
    /*calculate the ratio between result DIV and lens:*/
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /*set background properties for the result DIV:*/
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      /*calculate the position of the lens:*/
      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);
      /*prevent the lens from being positioned outside the image:*/
      if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
      if (x < 0) {x = 0;}
      if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
      if (y < 0) {y = 0;}
      /*set the position of the lens:*/
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /*display what the lens "sees":*/
      result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }

  // Initiate zoom effect:
  imageZoom("myimage", "myresult");
  $(".togle").click(function(){$(".hidden")(5000)})

/* #####################################End Product Page######################################### */