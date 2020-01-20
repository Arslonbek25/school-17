$(document).ready(function() {
    $('#scroll-up').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $('.owl-carousel').owlCarousel({
        nav: true,
        center: true,
        loop: true,
        dots: true,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },

            425: {
                items: 2
            },

            600: {
                items: 3
            }
        }
    });
});