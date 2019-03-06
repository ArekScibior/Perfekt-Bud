(function($) {

    $.fn.visible = function(partial) {
            
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };
})(jQuery);

//toogle burger-nav
$('.burger-nav span').css('background-color', 'black')
$('.burger-list ul li a').css('color', 'black')
$( ".burger-nav" ).click(function() {
    $('.burger-nav span').css('background-color', 'black')
    $('.burger-list ul li a').css('color', 'black')
    $( ".nav-main" ).toggleClass('burger-list', 'slow')
    $(this).toggleClass('open');
}) 