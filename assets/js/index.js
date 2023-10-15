// -----------------------------------------include Header--------------------------------
$(function () {
    $("#header").load("layout/header.html");
    $("#footer").load("layout/footer.html");
});
//****************************************** */ include Header****************************


//---------------------------------------- use it header color change---------------------
$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 70) {
            $(".NavbarMain").addClass("active");
        } else {
      //remove the background property so it comes transparent again (defined in your css)
            $(".NavbarMain").removeClass("active");
        }
    });
});
//*****************************************/ header color change****************************


// ----------------------------------------owl carousel javascript--------------------------
$('.slider').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    autoHeightClass: 'owl-height',
    nav: true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
//*******************************************owl Carousel End*******************************








