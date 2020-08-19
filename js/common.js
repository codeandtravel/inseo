$(".open-pop-up").click(function (e) {
    e.preventDefault();
    var id = $(this).attr("data-open-up");
    if($(".pop-up-content").is("#"+id)) {
        $("body").addClass("overflow");
        $("#"+id).addClass("active-in");
    }
});
$(".close-pop-up, .ok-btn").click(function (e) {
    e.preventDefault();
    $(".pop-up-content").removeClass("active-in");
    $("body").removeClass("overflow");
});

$(".hamburger").click(function () {
   $('body').toggleClass('active-in');
   $('.wrap-menu').toggleClass('active');
   $(this).toggleClass('active');
});
$("#menu li").click(function(){
    $(".menu-content").toggleClass('active');
    $(".menu-list").toggleClass('active');
});

$(".wrap-menu a").click(function(){
    var btn = $(this).attr('href');
    if ($('section'+btn).length != 0) {
        $('html, body').animate({
            scrollTop: $('section'+btn).offset().top
        }, 1000);
    }
    return false;
});
