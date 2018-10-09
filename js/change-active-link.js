$( document ).ready(function() {
    $(document).on("scroll", onScroll);

    function onScroll(event){

        let scrollPos = $(document).scrollTop() + 1; // 1 the magic number
        $('#navbarNav .navbar-nav li a').each(function () {
            let currLink = $(this);
            let refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $( '#navbarNav .navbar-nav' ).find( 'li a.active' ).removeClass( 'active' );
                currLink.addClass('active');
            }
            else{
                currLink.removeClass("active");
            }
        });
    }
});

