$(function () {

    "use strict";

    /*==========   Slick Carousel ==========*/
    $('.slick-carousel').slick();

    $('.slider-with-navs').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        dots: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-with-navs',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: false
    });


});