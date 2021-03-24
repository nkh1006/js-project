$(document).ready(function() {
    $('ul > li:first-child').addClass('active');   
    $('.list-btn').click(function() {
        if($(this).hasClass('up')){
            if ($('ul > li:first-child').hasClass('active')) {
                $('ul > li:first-child').removeClass("active");
                $('ul > li:last-child').addClass("active");
            } else {
                $('li.active').prev().addClass("active").siblings().removeClass("active");
            }
        } else {
            if ($('ul > li:last-child').hasClass('active')) {
                $('ul > li:last-child').removeClass("active");
                $('ul > li:first-child').addClass("active");
            } else {
                $('li.active').next().addClass("active").siblings().removeClass("active");
            }
        }
    });
});