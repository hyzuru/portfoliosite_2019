$(function() {
 // Animate loader off screen
 $(".se-pre-con").fadeOut("slow");

 AOS.init();


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
    // console.log(win_width);
    if ($("#menu-toggle").is(":checked")) {
    } else {
      if (win_width <= target_width) {
        // if smaller than desktop size
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

  // $('.contentpageslider').bxSlider();
  // $('.instructionSlider').bxSlider();

  // $(window).scroll(function() {
  //   var scroll = $(window).scrollTop();
  //   var os = $('.timeline').offset().top;
  //   var ht = $('.timeline').height();
  //   if(scroll > os + ht){
  //       $('.totopArrow').attr("src","../img/totopArrow-white.png");
  //   }

// });

$(window).scroll(function(){
  
  if ($(window).scrollTop() > $('.timeline').offset().top - 800 && $(window).scrollTop() < $('.creativework').offset().top  - 800){
    $('.totopArrow').css("background", "url('img/totopArrow-white.png') no-repeat");
  } else if ($(window).scrollTop() > $('.right3').offset().top  - 1200 && $(window).scrollTop() < $('.lasttagline').offset().top  - 1200) {
    $('.totopArrow').css("background", "url('img/totopArrow-white.png') no-repeat");
  } else if ($(window).scrollTop() > $('.mailmaga').offset().top  - 1200) {
    $('.totopArrow').css("background", "url('img/totopArrow-white.png') no-repeat");
  } 
      else {
    $(".totopArrow").css("background", "url('img/totopArrow.png') no-repeat");
  }
  if (win_width <= target_width) {
    if ($(window).scrollTop() > $('.timeline').offset().top - 600 && $(window).scrollTop() < $('.creativework').offset().top  - 600){
      $('.totopArrow').css("background", "url('img/totopArrow-white.png') no-repeat");
    } else if ($(window).scrollTop() > $('.right3').offset().top && $(window).scrollTop() < $('.lasttagline').offset().top) {
      $('.totopArrow').css("background", "url('img/totopArrow-white.png') no-repeat");
    } else if ($(window).scrollTop() > $('#sitePoints-sp').offset().top - 600 && $(window).scrollTop() < $('.about').offset().top - 600) {
      $('.totopArrow').css("background", "url('img/totopArrow-white.png') no-repeat");
    } else if ($(window).scrollTop() > $('.mailmaga').offset().top  - 500) {
      $('.totopArrow').css("background", "url('img/totopArrow-white.png') no-repeat");
    } 
        else {
      $(".totopArrow").css("background", "url('img/totopArrow.png') no-repeat");
    }

  }

})

});

function openDesigner(evt, designerType) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(designerType).style.display = "block";
  evt.currentTarget.className += " active";
}

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

document.addEventListener("DOMContentLoaded", function(event) {
  $('.button').hover(function() {
    $(this).css('cursor','pointer');
  });

  var modal = document.querySelectorAll(".modal");
  var trigger = document.querySelectorAll(".trigger");
  // console.log(trigger);


  function toggleModal(event) {
    // console.log(event.target.dataset.modal)
    // var modalNumber = this.dataset.modal ;
    // console.log(modalNumber);

    // if (event.target.id === modalNumber) {
    //   console.log(event.target.id);
    //   // toggleModal();
    //   modal = modalNumber ; 
    // }
    document.getElementById(event.target.dataset.modal).classList.toggle("show-modal");
    // toggleLock();
  }

  // モーダルを閉じる処理
  function closeModal() {
    const modal = document.querySelectorAll(".show-modal");

    modal.forEach(function(value) {
      value.classList.toggle("show-modal");
    });
    toggleLock();

  }

  for (i = 0; i < trigger.length; ++i) {
    trigger[i].addEventListener("click", toggleModal);
    // console.log(modal);
    
    // modal.getAttribute("id"); 
    // console.log(modal.id)

  }

  modal.forEach(function(value) {
    value.getElementsByClassName('close-button')[0].addEventListener('click', closeModal);
    value.getElementsByClassName('modal-overlay')[0].addEventListener('click', closeModal);
  });

  // フェードインエフェクト
  // ScrollReveal().reveal('.timeReveal', { delay: 200 });
  // ScrollReveal().reveal('.timeReveal2', { delay: 300 });
  // ScrollReveal().reveal('.timeReveal3', { delay: 400 });
  // ScrollReveal().reveal('.timeReveal4', { delay: 600 });
  // ScrollReveal().reveal('.timeReveal5', { delay: 800 });

  var radioIdName;
  $('input:radio').click(function(){
    radioIdName = $('input').attr('id') ;
    // console.log("radioIdName = " + radioIdName );
    // $('label#' + $(this).attr('id')).addClass('addedclass'); // checkedClass is defined in your CSS
    
});


});
