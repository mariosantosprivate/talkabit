$( '#navbarNav .navbar-nav li a' ).on( 'click', function () {
    $( '#navbarNav .navbar-nav' ).find( 'li a.active' ).removeClass( 'active' );
    $( this ).addClass( 'active' );
});