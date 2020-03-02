$('body').on('scroll', function() {
    if ($('body').scrollTop() > 50) {
        $('.nav').addClass('nav--scrolled');
    } else
        $('.nav').removeClass('nav--scrolled');
});

$('#scroll-up').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 'slow');
})