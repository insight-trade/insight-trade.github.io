$(function() {
    /*{{{ Scroll to top */
    var settings = {
        text: 'To Top',
        min: 200,
        inDelay: 600,
        outDelay: 300,
        containerID: 'to-top',
        containerHoverID: 'to-top-hover',
        scrollSpeed: 300,
        easingType: 'linear'
    };

    var toTopHidden = true;
    var toTop = $('#' + settings.containerID);

    toTop.click(function(e) {
        e.preventDefault();
        $.scrollTo(0, settings.scrollSpeed, {easing: settings.easingType});
    });

    $(window).scroll(function() {
        var sd = $(this).scrollTop();
        if (sd > settings.min && toTopHidden)
        {
            toTop.fadeIn(settings.inDelay);
            toTopHidden = false;
        }
        else if (sd <= settings.min && ! toTopHidden)
        {
            toTop.fadeOut(settings.outDelay);
            toTopHidden = true;
        }
    });
    /*}}}*/

    $('.slick').slick({
        infinite: true,
        speed: 2000,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    });

    $('#contact-bar').on('click', function() {
        window.scrollTo(0, document.body.scrollHeight);
    });
});
