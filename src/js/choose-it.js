(function($) {
    'use strict';

    $.fn.chooseIt = function( options ) {

        var settings = $.extend({
            initSlide: 'slide-1',
            navClass: 'ci-nav',
            slideIdentifier: 'ci-slide'
        }, options);

        var showNextSlide = function() {

            var action = $(this);

            action.parent('.' + settings.slideIdentifier).fadeOut('fast', function() {
                $(this).siblings('#' + action.attr('path')).fadeIn('slow');
            });
        };

        return this.each(function() {

            var thisSlide = $(this);

            thisSlide.children('.' + settings.slideIdentifier).each(function() {
                $(this).children('.' + settings.navClass).click( showNextSlide );
            }).hide();

            thisSlide.children('#' + settings.initSlide).fadeIn('slow');
        });
    };
})(jQuery);