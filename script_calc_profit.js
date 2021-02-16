jQuery(function($) {
    var pips1 = '';
    var pips2 = '';
    var pips3 = '';
    var show_border = true;
    if( $( 'body' ).hasClass( 'page-dropshipping-profit-calculator' ) || $( 'body' ).hasClass( 'home' ) ) {
        show_border = false;
        pips1 = {
            mode: 'values',
            values: [5, 100, 200, 300],
            density: 30,
            format: {
                to: function (value) {
                    return '$' + value;
                }
            }
        };
        pips2 = {
            mode: 'values',
            values: [10, 100, 200, 300],
            density: 30,
            format: {
                to: function (value) {
                    return value + '%';
                }
            }
        };
        pips3 = {
            mode: 'values',
            values: [0, 250, 500, 750],
            density: 30,
        };
    }

    var price_slider = 0;
    var margin = 0;
    var amount = 0;
    var cashback = 0.08;
    var block_result_price = $( '.block-result-price' );
    var slider1 = document.getElementById( 'slider1' );
    var slider1Res = document.querySelector( '.aliexpress-supplier-price-res' );

    var slider1res = document.querySelector( '.slider1res' );
    var slider2res = document.querySelector( '.slider2res' );
    var slider3res = document.querySelector( '.slider3res' );

    if( slider1 ) {
        noUiSlider.create(slider1, {
            animate: true,
            animationDuration: 1300,
            start: [10],
            connect: [true, false],
            range: {
                'min': 5,
                'max': 300
            },
            step: 1,
            pips: pips1
        });

        var connect1 = slider1.querySelectorAll( '.noUi-connect' );
        var classes1 = [ 'c-1-color' ];

        for ( var i = 0; i < connect1.length; i++ ) {
            connect1[i].classList.add(classes1[i]);
        }
        slider1.noUiSlider.on('update', function( values, handle ) {
            if( show_border ) {
                slider1res.style.border = "thin solid #B3D1E1";
                slider2res.style.border = "thin solid #dddfe2";
                slider3res.style.border = "thin solid #dddfe2";
            }
            slider1Res.innerHTML = price_slider = ~~values[0];
            sumAll();
        });

        slider1.noUiSlider.on('slide', function( values, handle ) {
            $( '#slider1 .noUi-connect ').css( 'transition', 'transform 0s linear' );
            $( '#slider1 .noUi-origin' ).css( 'transition', 'transform 0s linear' );
        });
    }

    var slider2 = document.getElementById( 'slider2' );
    var slider2Res = document.querySelector( '.your-margin-res' );

    if( slider2 ) {
        noUiSlider.create(slider2, {
            animate: true,
            animationDuration: 1300,
            start: [10],
            connect: [true, false],
            range: {
                'min': 10,
                'max': 300
            },
            step: 10,
            pips: pips2
        });

        var connect2 = slider2.querySelectorAll( '.noUi-connect' );
        var classes2 = [ 'c-1-color' ];

        for ( var i = 0; i < connect2.length; i++ ) {
            connect2[i].classList.add(classes2[i]);
        }
        slider2.noUiSlider.on('update', function( values, handle ) {
            if( show_border ) {
                slider1res.style.border = "thin solid #dddfe2";
                slider2res.style.border = "thin solid #B3D1E1";
                slider3res.style.border = "thin solid #dddfe2";
            }
            slider2Res.innerHTML = margin = ~~values[0];
            sumAll();
        });

        slider2.noUiSlider.on('slide', function( values, handle ) {
            $( '#slider2 .noUi-connect' ).css( 'transition', 'transform 0s linear' );
            $( '#slider2 .noUi-origin' ).css( 'transition', 'transform 0s linear' );
        });
    }

    var slider3 = document.getElementById( 'slider3' );
    var slider3Res = document.querySelector( '.amount-sales-month-res' );

    if( slider3 ) {
        noUiSlider.create(slider3, {
            animate: true,
            animationDuration: 1300,
            start: [0],
            connect: [true, false],
            range: {
                'min': 0,
                'max': 750
            },
            step: 10,
            pips: pips3
        });

        var connect3 = slider3.querySelectorAll( '.noUi-connect' );
        var classes3 = [ 'c-1-color' ];

        for ( var i = 0; i < connect3.length; i++ ) {
            connect3[i].classList.add(classes3[i]);
        }
        slider3.noUiSlider.on('update', function( values, handle ) {
            if( show_border ) {
                slider1res.style.border = "thin solid #dddfe2";
                slider2res.style.border = "thin solid #dddfe2";
                slider3res.style.border = "thin solid #B3D1E1";
            }
            slider3Res.innerHTML = amount = ~~values[0];
            sumAll();
        });

        slider3.noUiSlider.on('slide', function( values, handle ) {
            $( '#slider3 .noUi-connect' ).css( 'transition', 'transform 0s linear' );
            $( '#slider3 .noUi-origin' ).css( 'transition', 'transform 0s linear' );
        });

        if( show_border ) {
            slider1res.style.border = "thin solid #dddfe2";
            slider2res.style.border = "thin solid #dddfe2";
            slider3res.style.border = "thin solid #dddfe2";
        }
    }

    $(window).on('load', function() {
        slider1.noUiSlider.set(70);
        slider2.noUiSlider.set(120);
        slider3.noUiSlider.set(400);
    });

    function formatMoney(n, c, d, t) {
        var c = isNaN(c = Math.abs(c)) ? 2 : c,
            d = d == undefined ? "." : d,
            t = t == undefined ? "." : t,
            s = n < 0 ? "-" : "",
            i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
            j = (j = i.length) > 3 ? j % 3 : 0;

        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    };

    function sumAll() {
        var res = (price_slider * (margin / 100) * amount) + (price_slider * cashback * amount);

        block_result_price.html( formatMoney( Math.ceil(res), 0, ".", "," ) );
    }
});