$(document).ready(function(){
    var slick_slider__offer = $('.slick-slider--offer')
    var slick_slider__testimonials = $('.slick-slider--testimonials')
    ;

    slick_slider__offer.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'ease',
        arrows: false
    });
    slick_slider__testimonials.slick({
        slidesToShow: 1,
        adaptiveHeight: true,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'ease',
        arrows: false
    });

});
