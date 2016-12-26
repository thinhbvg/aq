$('.aq-bar-menu').hover(function () {
    $('.bar-1').css({
        visibility: 'hidden',
        top: '13px',
        opacity: 0.5,
        'transition-delay': '0s'
    });
    $('.bar-2').css({
        top: '20px',
        'transition-delay': '0.0333333333333333s'

    });
    $('.bar-3').css({
        top: '27px',
        'transition-delay': '0.0666666666666667s'
    });
    $('.bar-4').css({
        top: '34px',
        visibility: 'visible',
        opacity: 1,
        'transition-delay': '0.1s'
    });
}, function () {
    $('.bar-1').css({
        visibility: 'visible',
        top: '20px',
        opacity: 1,
        'transition-delay': '0.1s'
    });
    $('.bar-2').css({
        top: '27px',
        'transition-delay': '0.0666666666666667s'
    });
    $('.bar-3').css({
        top: '34px',
        'transition-delay': '0.0333333333333333s'
    });
    $('.bar-4').css({
        top: '41px',
        visibility: 'hidden',
        opacity: 0.5,
        'transition-delay': '0s'
    });
});

$(document).ready(function () {
    $('.aq-big-img').css({
        'background-position': '0 0'
    });
    $('.aq-detail-wrapper').css({
        'visibility': 'visible',
        'transform': 'translateY(-50%)'
    });
    $('.aq-assos').css({
        'top': 0
    });
    $('.aq-digital').css({
        'top': 0
    });
    $('.aq-bar-logo').css({
        'margin-left': 0,
        'opacity': 1
    });
});

$('.aq-bar-menu').click(function () {
    $('.aq-overlay-wrapper').fadeIn();

    $('.aq-bar-menu span').css({
        backgroundColor: '#0083DD'
    });

    $('.bar-1-overlay').css({
        transform: 'rotate(45deg)',
        left: '25px',
        top: '27px'
    });

    $('.bar-2-overlay').css({
        display: 'none'
    });

    $('.bar-3-overlay').css({
        transform: 'rotate(-45deg)',
        left: '25px',
        top: '27px'
    });
    $('.aq-overlay-list').css({
        opacity: 1,
        bottom: '20%'
    });
    $('.aq-overlay-list span').css({
        'border-bottom': '1px solid #ccc',
        opacity: 1
    });
});

$('.aq-bar-menu-overlay').click(function () {
    $('.aq-overlay-wrapper').fadeOut();

    $('.bar-1-overlay').css({
        transform: 'rotate(0)',
        left: '25px',
        top: '20px'
    });

    $('.bar-2-overlay').css({
        display: 'block'
    });

    $('.bar-3-overlay').css({
        transform: 'rotate(0)',
        left: '25px',
        top: '34px'
    });

    $('.aq-bar-menu span').css({
        backgroundColor: '#fff'
    });

    $('.aq-overlay-list').css({
        opacity: 0,
        bottom: '0'
    });

    $('.aq-overlay-list span').css({
        'border-bottom': '0px solid #ccc',
        opacity: 0
    });
});

$('.aq-palzileri').hover(function () {
    $('.aq-palzileri-title> span').css({
        visibility: 'hidden',
        transition: 'all 0s',
        opacity: 0
    });
}, function () {
    $('.aq-palzileri-title> span').css({
        visibility: 'visible',
        'transition-delay': '1s',
        'transition-duration': '1s',
        'opacity': 1
    });
});

$(window).scroll(function () {
    var window_top = $(window).scrollTop();
    var window_bottom = $(window).scrollTop() + $(window).height();
    if (window_bottom >= $('.aq-palzileri').offset().top) {
        $('.aq-palzileri').css({
            'top': '-300px'
        });
    }

    if (window_bottom >= $('.aq-scruud').offset().top) {
        $('.aq-scruud').css({
            'top': 0
        })
    }

    if (window_bottom >= $('.aq-mediaset').offset().top) {
        $('.aq-mediaset').css({
            'top': '1100px'
        });
        $('.aq-ferrari').css({
            'top': 0
        });
    }

    if (window_bottom >= $('.aq-fornasetti').offset().top) {
        $('.aq-fornasetti').css({
            'top': '1500px'
        });
    }

    if (window_bottom >= $('.aq-something').offset().top) {
        $('.aq-something').css({
            'top': 0
        });
    }

    if (window_bottom >= $('.aq-citco').offset().top) {
        $('.aq-citco').css({
            'top': '2300px'
        });

        $('.aq-loadmore').css({
            'top': '2300px'
        });
    }

    if (window_bottom >= $('.aq-social').offset().top) {
        $('.aq-social').css({
            'top': 0
        });
    }

    if (window_bottom >= $('.number-plus').offset().top) {
        $('.number-5').css({
            'opacity': 1,
            'top': 0
        });
        $('.number-0').css({
            'opacity': 1,
            'top': 0
        });
    }

    if (window_bottom >= $('.aq-awards').offset().top + 20) {
        $('.aq-awards-box').css({
            'top': 0,
            'opacity': 1
        });

        $('.aq-awards-span').css({
            'opacity': 1,
            'visibility': 'visible'
        });

        $('.count').each(function () {
            if (parseInt($('.aq-awards-box').css('opacity')) < 1) {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function () {
                        $(this).text(Math.ceil(this.Counter));
                    }
                });
            }
            $(window).off();
        });


    }
    /*var i = 0;
                    var count = setInterval(function () {
                    console.log(parseInt($eachNumber.text()));
                    if (i <= parseInt($eachNumber.text())) {
                        $eachNumber.text(i++);
                    } else {
                        i = 0;
                        clearInterval(count);
                    }
                    }, 200);*/

});