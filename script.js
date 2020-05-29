let community = 4686, distributed = 583480;
$(function () {
    $(window).scroll(function () {
        //$('.mover').css('top', $( window ).scrollTop());
    })
        .scroll();
    $(document).on('click', 'nav a[href^="#"]', function () {
        let obj = $( '' + $(this).attr('href') );
        if( obj.length ) {
            let d = window.screen.width > 768 ? 30 : 90;
            $( window ).scrollTop( obj.offset().top - d );
            if( window.screen.width <= 768 ) {
                $('.navbar-toggler').click();
            }
            return false;
        }
    });

    liveCounter();
});

function liveCounter () {
    setTimeout(function () {
        community += randomInt( 1, 3 );
        distributed += ( randomInt( 10, 33 ) * 10 );
        $('.community').text( Number.parseInt( community ).toLocaleString('en') );
        $('.distributed').text( Number.parseInt( distributed ).toLocaleString('en') );
        liveCounter ();
    }, randomInt( 1000, 5000 ));
}

function randomInt( min, max ) {
    return Math.floor(Math.random() * (+max - +min)) + +min;
}