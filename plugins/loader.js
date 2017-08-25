$( window ).resize(fix);

function fix() {    
    var width = $(window).width();

    if (width >= 1000)
    {
        $(window).scrollTop(0);
    }    
}

