(function($) {
    'use strict';

    $.fn.chooseIt = function( options ) {

        var settings = $.extend({
            initSlide: 'slide-1',
            navClass: 'ci-nav',
            slideClass: 'ci-slide'
        }, options);

        var showNextSlide = function() {

            var action = $(this);

            action.parent('.' + settings.slideClass).fadeOut('fast', function() {
                $(this).siblings('#' + action.attr('path')).fadeIn('slow');
            });
        };

        return this.each(function() {

            var thisSlide = $(this);

            thisSlide.children('.' + settings.slideClass).each(function() {
                $(this).children('.' + settings.navClass).click( showNextSlide );
            }).hide();

            thisSlide.children('#' + settings.initSlide).fadeIn('slow');
        });
    };
})(jQuery);