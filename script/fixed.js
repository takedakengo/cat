$(function() {
    var offset = $('#nav').offset();
 
    $(window).scroll(function () {
        if ($(window).scrollTop() > offset.top) {
            $('#nav').addClass('fixed');
        } else {
            $('#nav').removeClass('fixed');
        }
    });
});