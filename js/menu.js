$(document).ready(main);

var contador = 1;

function main() {
    $('.menu_bar').click(function() {
        // $('nav').toggle(); Forma Sencilla de aparecer y desaparecer

        if (contador == 1) {
            $('nav').animate({
                left: '10%'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        };

    });
};
var altura = $('.menu').offset().top;

$(window).on('scroll', function() {
    if ($(window).scrollTop() > altura) {
        $('.menu').addClass('menu-fixed');
    } else {
        $('.menu').removeClass('menu-fixed');
    }
});
var alturas = $('.menu').offset().top;

$(window).on('scroll', function() {
    if ($(window).scrollTop() > alturas) {
        $('.menu_bar').addClass('menu_bar-fixed');
        // $('nav').addClass('.menu-fixed')
    } else {
        $('.menu_bar').removeClass('menu_bar-fixed');
        // $('nav').removeClass('.menu-fixed')
    }

    if (contador == 0) {
        $('nav').animate({
            left: '-100%'
        })
        contador = 1;
    }
});