//Grid pixel/class name animation
$("body").animate({opacity:1}, 2000);
$("#grid_system .row div").hover(function() {
    var that = $(this);
    that.find("h2").stop().animate({opacity: 0, left: "20px"}, 400);
    that.find("h3").stop().animate({opacity: 1, right: "0px"}, 400);
    
}, function(){
    var that = $(this);
    that.find("h2").stop().animate({opacity: 1, left: "0px"}, 400);
    that.find("h3").stop().animate({opacity: 0, right: "20px"}, 400);
});