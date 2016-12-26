var target = $(".detect").offset().top;


var interval = setInterval(function() {
    if ($(window).scrollTop() >= target) {
        document.getElementById('inactive').id = 'slide';
        clearInterval(interval);
    }
}, 150);