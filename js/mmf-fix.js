(function($) {

    function tfw_mmf_fix(menu, top_level_link) {
        var $menu = $(menu);

        $menu.find('a').each(function() {
            var el = $(this);

            el.off('click');

            if ( el.is(top_level_link) ) {
                el.attr('href', '#');
            }

            if ( ! el.siblings('.sub-menu').length ) {
                el.on('click', function(event) {
                    el.parents('.mobile_nav').trigger('click');
                });
            } else {
                el.on('click', function(event) {
                    event.preventDefault();
                    el.parent().toggleClass('visible');
                });
            }
        });
    }

    $(window).load(function() {
        setTimeout(function() {
            tfw_mmf_fix('#mobile_menu', '#mobile_menu .menu-item-has-children > a');
        }, 700);
    });

})(jQuery);
