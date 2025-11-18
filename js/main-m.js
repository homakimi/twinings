$(function() {
    detectScroll();
    $(window).scroll(function() {
        detectScroll();
    })


    $('.box-swiper').each(function(index) {
        $(this).addClass('box-swiper-'+index)
        new Swiper('.box-swiper-'+index+' .swiper', {
            speed: 750,
            spaceBetween: 50,
            autoHeight: true,
            navigation: {
                nextEl: '.box-swiper-'+index+' .swiper-button-next',
                prevEl: '.box-swiper-'+index+' .swiper-button-prev',
            },
        });
    })

})

$(document)
.on('click', 'a', function(e) {
    if($(this).attr('href').length == 0) {
        e.preventDefault();
    }
})
.on('mousedown', 'img', function(e) {
    e.preventDefault();
})
.on('click', '.intro-tab a', function() {
    if(!$(this).hasClass('active')) {
        $('.intro-tab a').removeClass('active');
        $(this).addClass('active');
        $('.intro-title h2').hide();
        $('.intro-title h2').eq($(this).index()).fadeIn()
        $('.intro-info-block').hide();
        $('.intro-info-block').eq($(this).index()).fadeIn()
    }
})

var kvLock1 = false;
var introLock = false;
function detectScroll() {
    var _kvProgress = ($(window).scrollTop() - $('.kv').offset().top) / $('.kv-wrap').height()
    if(_kvProgress < 0.5) {
        $('.kv-scale').removeClass('step-1');
        kvLock1 = false;
    }
    else if(_kvProgress >= 0.5) {
        $('.kv-scale').addClass('step-1');
        if (!kvLock1) {
            $(window).scrollTop($('.kv').offset().top + $('.kv-wrap').height() * 0.5 + 5);
            setTimeout(function() {
                kvLock1 = true;
            }, 1000)
        }
    }

    var _introProgress = ($(window).scrollTop() - $('.intro').offset().top) / $('.intro-sticky').height()
    if(_introProgress >= 0.25) {
        $('.intro-sticky').addClass('step-1');
        if (!introLock) {
            $(window).scrollTop($('.intro').offset().top + $('.intro').height() * 0.25 + 5);
            setTimeout(function() {
                introLock = true;
                $('.intro-sticky').css('position', 'relative').css('height', 'auto');
                $('.intro').css('height', 'auto');
                $(window).scrollTop($('.intro').offset().top);
            }, 1250)
        }
    }
}