$(function() {
    detectScroll();
    $(window).scroll(function() {
        detectScroll();
    })

    resizeBlock();
    $(window).resize(function() {
        resizeBlock();
    })


    $('.box-swiper').each(function(index) {
        $(this).addClass('box-swiper-'+index)
        new Swiper('.box-swiper-'+index+' .swiper', {
            speed: 750,
            spaceBetween: 50,
            navigation: {
                nextEl: '.box-swiper-'+index+' .swiper-button-next',
                prevEl: '.box-swiper-'+index+' .swiper-button-prev',
            },
        });
    })

})

function resizeBlock() {
    const designW = $('.kv-scale').width();
    const designH = $('.kv-scale').height();

    const ww = $(window).width();
    const wh = $(window).height();

    // 依照寬高
    // const scale = Math.min(wh / designH, ww / designW);
    // 依照高
    const scale = Math.min(wh / designH); 
    $('.kv-wrap').css('width', designW*scale).css('height', designH*scale);
    $('.kv-scale').css({transform: 'translateX(-50%) scale(' + scale + ')'});
}

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
var kvLock2 = false;
var introLock = false;
function detectScroll() {
    var _kvProgress = ($(window).scrollTop() - $('.kv').offset().top) / $('.kv-wrap').height()
    if(_kvProgress < 0.3) {
        $('.kv-scale').removeClass('step-1 step-2');
        kvLock1 = false;
        kvLock2 = false;
    }
    else if(_kvProgress >= 0.3 && _kvProgress < 0.7) {
        $('.kv-scale').removeClass('step-2').addClass('step-1');
        kvLock2 = false;
        if (!kvLock1) {
            $(window).scrollTop($('.kv').offset().top + $('.kv-wrap').height() * 0.3 + 5);
            setTimeout(function() {
                kvLock1 = true;
            }, 1000)
        }
    }
    else if(_kvProgress >= 0.7 && _kvProgress < 1) {
        $('.kv-scale').removeClass('step-1').addClass('step-2');
        if (!kvLock2) {
            $(window).scrollTop($('.kv').offset().top + $('.kv-wrap').height() * 0.7 + 5);
            setTimeout(function() {
                kvLock2 = true;
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
            }, 1500)
        }
    } else {
        introLock = false;
        $('.intro-sticky').removeClass('step-1');
    }
}