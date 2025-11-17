$(function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    effect_fadein();
    $(document).scroll(function() {
        effect_fadein();
    })

    function effect_fadein() {
        $('[data-scroll-show-parent]').each(function() {
            if($(window).scrollTop() > $(this).offset().top - $(window).height()*0.75) {
                if($(this).data('scroll-show-parent').length != '') {
                    $(this).find('[data-scroll-show]').each(function(index) {
                        setTimeout(function() {
                            $(this).addClass('scrollShowActive');
                        }.bind(this), index*$(this).closest('[data-scroll-show-parent]').data('scroll-show-parent'))
                    })
                } else {
                    $(this).find('[data-scroll-show]').each(function() {
                        if($(this).data('scroll-show').length === 0) {
                            $(this).addClass('scrollShowActive');
                        } else {
                            setTimeout(function() {
                                $(this).addClass('scrollShowActive');
                            }.bind(this), $(this).data('scroll-show'))
                        }
                    })
                }
            }
        })
        $('[data-scroll-show]').each(function() {
            if($(window).scrollTop() > $(this).offset().top - $(window).height()*0.75) {
                if($(this).closest('[data-scroll-show-parent]').length == 0) {
                    if($(this).data('scroll-show').length === 0) {
                        $(this).addClass('scrollShowActive');
                    } else {
                        setTimeout(function() {
                            $(this).addClass('scrollShowActive');
                        }.bind(this), $(this).data('scroll-show'))
                    }
                }
            }
        })
    }
})