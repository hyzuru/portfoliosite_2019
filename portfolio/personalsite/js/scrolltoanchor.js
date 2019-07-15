$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollanchor').fadeIn();
        } else {
            $('.scrollanchor').fadeOut();
        }
    });

    $('.scrollanchor').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});

