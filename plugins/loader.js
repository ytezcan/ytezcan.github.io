$(document).ready(fix);

$( window ).resize(fix);

function fix() {
    
    var windowHeight = $(window).height();
    var contentHeight = $("#content").height();
    
    var top = 40;
    
    if (windowHeight > contentHeight + 80)
    {
        var diff = windowHeight - contentHeight;
        top = Math.floor(diff / 2);
    }
        
    $("#content").css("top", top + "px");
    
}

 $(window).on('load', function () {
	$("#fullscreen").css("background", "rgba(8, 29, 56, 0.9)");
 });


