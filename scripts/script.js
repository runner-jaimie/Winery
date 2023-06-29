//hamburger menu
$(function () {
    function slideMenu() {
        var activeState = $("#menu-container .menu-list").hasClass("active");
        $("#menu-container .menu-list").animate({ left: activeState ? "0%" : "-100%" }, 400);
    }
    $("#menu-wrapper").click(function (event) {
        event.stopPropagation();
        $("#hamburger-menu").toggleClass("open");
        $("#menu-container .menu-list").toggleClass("active");
        slideMenu();

        $("body").toggleClass("overflow-hidden");
    });

    $(".menu-list").find(".accordion-toggle").click(function () {
        $(this).next().toggleClass("open").slideToggle("fast");
        $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");

        $(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
        $(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
    });
}); // jQuery load

//Check to see if the window is top if not then display button
//& change header height and logo size
$(window).scroll(function () {

    var height = $(window).scrollTop();

    if (height > 100) {

        $('.go-to-up').fadeIn();
        $('.full-site').css('height', '100px');
        $('.header-logo img').attr('src', 'images/white-logo-medium.png');
        $('.menu-has-children').mouseenter(function () {
            $('.sub-menu').css('background', '#f5f5f5');
            $('.sub-menu').css('border', '1px solid #eeeeee');
        });

    } else {

        $('.go-to-up').fadeOut();
        $('.full-site').css('height', '200px');
        $('.header-logo img').attr('src', 'images/white-logo.png');
        $('.menu-has-children').mouseenter(function () {
            $('.sub-menu').css('background', '#fff');
            $('.sub-menu').css('border', '1px solid #e0e0e0');
        });
    }
});

//When clicked go-up-to button
//& when clicked directions button
$(document).ready(function () {
    $(".go-to-up").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $(".search-map").click(function () {
        $('html,body').animate({
            scrollTop: $(".map-container").offset().top
        },
            'slow');
    });

    $('.menu-m').mouseenter(function () {

        $('#source-soup').attr('src', 'images/' + $(this).attr('id') + '.jpg');

    });
    $('.menu-s').mouseenter(function () {

        $('#source-salad').attr('src', 'images/' + $(this).attr('id') + '.jpg');

    });
    $('.menu-l').mouseenter(function () {

        $('#source-lunch').attr('src', 'images/' + $(this).attr('id') + '.jpg');

    });
    $('.menu-e').mouseenter(function () {

        $('#source-entree').attr('src', 'images/' + $(this).attr('id') + '.jpg');

    });

});



