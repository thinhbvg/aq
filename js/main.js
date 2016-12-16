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