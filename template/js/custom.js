$(function(){

    'use strict';

    $('.headerOwl').owlCarousel({
        rtl:true,
        autoplaySpeed: 500,
        animateOut:'fadeOut',
        // autoplay:true,
        loop:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.owlProd').owlCarousel({
        rtl:true,
        autoplaySpeed: 2000,
        animateOut:'fadeOut',
        autoplay:true,
        loop:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });

    $('.owlCom').owlCarousel({
        rtl:true,
        autoplaySpeed: 2000,
        animateOut:'fadeOut',
        autoplay:true,
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:7
            }
        }
    });

    // Rating 
    $('.owlProd .clickRate li').click(function(){
        $('.owlProd .clickRate li').removeClass('fillStar');
        var $i = 0;
        for ($i = 0; $i <= $('.owlProd .clickRate li').index(this) ; $i++) {
            $('.owlProd .clickRate li').eq($i).addClass('fillStar');
        }
    });
   
});