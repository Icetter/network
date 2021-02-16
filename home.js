jQuery(function ($) {
    $('#head .items').addClass('owl-carousel').owlCarousel({
        center: true,
        items: 2,
        margin: 15,
        loop: true,
        nav: false,
        dots: true,
        autoWidth:true,
        // autoHeight: true
    });

    function resizeEmbedVideo() {
        var width = $('#video-reviews .item').width();
        $('#video-reviews iframe').attr({'width':width, 'height': width});

        var th 		= $('#real .video .right'),
            video 	= th.find('iframe');
        var vidWidth = $(th).width(),
            vidHeight = vidWidth / 1.77777;
        video.attr({'width':vidWidth, 'height': vidHeight});

        $('#real .img img').css('height', vidHeight);
    }
    $(window).on('load resize', resizeEmbedVideo);

    $('#video-reviews .items').addClass('owl-carousel').owlCarousel({
        lazyLoad:true,
        items: 1,
        margin: 40,
        loop: true,
        nav: true,
        dots: true,
        autoHeight: false,
        responsive: {
            768: {
                items: 2
            }
        },
        onInitialized: function () {
            if (window.lazyLoadInstance) {
                window.lazyLoadInstance.update();
            }
        }
    });

    $('#trustpilot .owl-carousel').owlCarousel({
        items: 1,
        margin: 15,
        loop: true,
        nav: true,
        dots: true,
        autoHeight: false,
        responsive: {
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1280: {
                items: 4
            }
        }
    });

    $('#real .owl-carousel').owlCarousel({
        lazyLoad:true,
        items: 1,
        margin: 15,
        loop: false,
        nav: true,
        dots: true,
        autoHeight: false
    });

    $('.posts_blocks .owl-carousel').owlCarousel({
        lazyLoad:true,
        margin: 20,
        items: 4,
        loop: false,
        nav: false,
        dots: true,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        autoHeight: false,
        autoWidth: false,
        mouseDrag: false,
        responsive : {
            0 : {
                items: 1,
                nav: false,
                loop: true,
                dots: true,
                margin: 0
            },
            480 : {
                items: 2,
                nav: false,
                loop: true,
                dots: true,
                margin: 10
            },
            768 : {
                items: 3,
                nav: false,
                loop: true,
                margin: 10
            },
            1200 : {
                items: 3,
                nav: true,
                loop: true
            }
        }
    });
});
