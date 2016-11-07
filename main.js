$( document ).ready(function(){	
	$('#openMenu').click(function () {
        $('nav.mobileNavigation').show(300);
        $('.fa-bars').hide(300);
    });

    $('#closeMenu').click(function () {
        $('nav.mobileNavigation').hide(300);
        $('.fa-bars').show(300);
     });

    $('nav.mobileNavigation a').click(function () {
        $('nav.mobileNavigation').hide(300);
        $('.fa-bars').show(300);
    });
});