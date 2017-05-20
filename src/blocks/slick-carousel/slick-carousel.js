$(document).ready(function(){
    var slick_slider__offer = $('.slick-slider--offer')
    ;

    slick_slider__offer.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });

});
