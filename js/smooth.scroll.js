$(document).on('click', 'a.nav-link[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 55
    }, 900);
});