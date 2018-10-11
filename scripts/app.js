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


$(document).scroll(function() {
    var y = $(this).scrollTop();
    console.log(y)
    //adding arrow on scroll
    if (y > 50) {
        $('.slide-icon').css('visibility', 'visible');
        $('.slide-icon').fadeIn();
        $('.arrow').css('color', '#000')
    } else {
        $('.slide-icon').fadeOut();
        $('.arrow').css('color', '#000')
    }

    if(y > 599 && y < 1201) {
        $('.arrow').css('color', '#fff')
    }
    if(y > 1777 && y < 2279) {
        $('.arrow').css('color', '#fff')
    }
    if(y > 2793) {
        $('.arrow').css('color', '#fff')
    }


    //adding class header-fixed on scroll
    if(y > 35) {

    }
    if (y < 35) {
        $("#header").removeClass('fixed-header')
        $('.logo').css('color', '#fff')
        $('.nav-main a').css('color', '#fff')
        $('.content').css('margin-top', '0')
        $('.logo-main img').css('width', '160px')
    } else {
        $("#header").addClass('fixed-header')    
        $('.nav-main a').css('color', '#000')
        $('.logo').css('color', '#000')
        $('.content').css('margin-top', '90px')
        $('.logo-main img').css('width', '125px')
    }
});
$(".see-more").click(function() {
    $("html, body").animate({ scrollTop: 720 }, "slow");
    return false;
});
$('.arrow').click(function() {
    var body = $("html, body");
    body.stop().animate({scrollTop:0}, 'slow', 'swing', function() {
    });
})


var win = $(window);
    
var left = $(".left-side");
var right = $(".right-side");

// slide in on scroll
left.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible"); 
    } 
});

right.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible"); 
    } 
});

win.scroll(function(event) {
    
    left.each(function(i, el) {
        console.log('working')
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in-left"); 
        } 
    });
    
    right.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in"); 
        } 
    });   
}); 

//type.js title

var typed1 = new Typed('.main-title', {
    strings: ['', 'Zaufaj nam.'],
    typeSpeed: 40,
    backSpeed: 0,
    fadeOut: true,
    onComplete: function(pos, self) { $('.typed-cursor').css('visibility', 'hidden') },
});
var typed2 = new Typed('.second-title', {
    strings: ['', 'Zbudujemy <br> Twoją przyszłość'],
    typeSpeed: 50,
    backSpeed: 0,
    startDelay: 1500,
    fadeOut: true,
});

var $mainNav = $('.main-nav');
var $window = $(window);
var $sections = [];
 
$mainNav.find('a').on('click', function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    var $target = $(href);
       
    $('html, body').animate({
        scrollTop : $target.offset().top
    }, 3000)
});