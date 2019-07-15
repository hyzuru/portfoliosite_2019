$(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
 

     
 
   var didScroll;
   var lastScrollTop = 80;
   var delta = 5;
   var navbarHeight = $("nav").outerHeight();
   var win_width = $(window).width();
   var target_width = 1024;
   var show_totop = 400 ; 
 
 
   // var st = $(this).scrollTop();
 
   $(window).scroll(function(event) {
     didScroll = true;
   });
 
 
   setInterval(function() {
     if (didScroll) {
       hasScrolled();
       didScroll = false;
     }
   }, 250);
 
   function hasScrolled() {
     var st = $(this).scrollTop();
 
     win_width = $(window).width();
     console.log(win_width);
     if ($("#menu-toggle").is(":checked")) {
     } else {
       if (win_width <= target_width) {
         // Make sure they scroll more than delta
         if (Math.abs(lastScrollTop - st) <= delta) return;
 
         // If they scrolled down and are past the navbar, add class .nav-up.
         // This is necessary so you never see what is "behind" the navbar.
         if (st > lastScrollTop && st > navbarHeight) {
           // Scroll Down
           $("nav")
             .removeClass("nav-down")
             .addClass("nav-up");
         } else {
           // Scroll Up
           if (st + $(window).height() < $(document).height()) {
             $("nav")
               .removeClass("nav-up")
               .addClass("nav-down");
           }
         }
         // if (st >= 850) {
         //     $('nav').fadeIn("fast");
         // }
         lastScrollTop = st;
       }
 
       if (st > show_totop) {
         $(".totopArrow").fadeIn("slow")
       } else if (st <= show_totop) {
         $(".totopArrow").fadeOut("slow")
       }
 
     }
 
     $(".page-section")
       .each(function(i) {
         if ($(this).position().top <= st) {
           $(".navBar ul li a.active").removeClass("active");
           $(".navBar ul li a")
             .eq(i)
             .addClass("active");
         }
       })
       .scroll();
     // console.log( $('.page-section') );
   }
   $(".menubutton").click(function() {
     $("#menu-toggle").prop("checked", false);
   });
 
   $('.contentpageslider').bxSlider();
   $('.instructionSlider').bxSlider();
 
 });
 
 
 $(window).on('load resize', function () {
   $('.content .right').width( $(this).width() - 480 );
 });
 function lockScroll() {
   var win_width = $(window).width();
   var target_width = 1024;
 
   if (win_width > target_width) {
     $(".menubutton").prop("onclick", null);
   } else {
     toggleLock();
   }
 }
 function toggleLock() {
   if ($("body").hasClass("lock-scroll")) {
     $("body").removeClass("lock-scroll");
   } else {
     $("body").addClass("lock-scroll");
   }
 }
 
