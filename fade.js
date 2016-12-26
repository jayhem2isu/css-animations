$(window).scroll(function () {
    console.log($(window).scrollTop());
    var topDivHeight = $(".detect").height();
    var viewPortSize = $(window).height();
    
    var triggerAt = 1900;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() >= triggerHeight) {
        $('.fade').css('visibility', 'visible').hide().fadeIn();
        $(this).off('scroll');
    }
});