src="https://code.jquery.com/jquery-3.5.1.slim.min.js">
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) { 
                $('#topMenu').addClass('menu-visible');
            } else {
                $('#topMenu').removeClass('menu-visible');
            }
        });
    });
