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

var owl = $('.hero-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    items:14,
    responsive: {
        0: {
            items: 10,
        },
        600: {
            items: 10,
        },
        1000: {
            items: 10,
        }
    }
});
//*******************************************owl Carousel End*******************************
// ******************************************Owl Carousel Games Start***********************
$('.gameslider').owlCarousel({
    items:10,
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})






