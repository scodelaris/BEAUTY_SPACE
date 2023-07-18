
var mainSwiper = new Swiper('.slider_main', {

    slidesPerView: 'auto',

    spaceBetween: 55,

    autoplay: {
        delay: 2500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },

    speed: 3000,

    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //     },
    //     480: {
    //         slidesPerView: 2,
    //     },
    //     992: {
    //         slidesPerView: 3,
    //     },
    //     1200: {
    //         slidesPerView: 'auto',
    //     }

    // },

});

const sliderBg = new Swiper('.slider_bg', {

    slidesPerView: 'auto',

    spaceBetween: 35,

    loop: true,

    autoplay: {
        delay: 2500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },

    speed: 3000,

    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //     },
    //     480: {
    //         slidesPerView: 2,
    //     },
    //     992: {
    //         slidesPerView: 3,
    //     },
    //     1200: {
    //         slidesPerView: 'auto',
    //     }

    // },

});

sliderBg.allowTouchMove = false;
mainSwiper.allowTouchMove = false;

var zoomSwiper = new Swiper('.slider_main_zoom', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    slidesPerView: 1,

    grabCursor: true,

    speed: 900,
});

    var activeIndex;

  mainSwiper.on('click', function() {
    var index = mainSwiper.clickedIndex;
    zoomSwiper.slideTo(index, 0);
    zoomSwiper.update();
    $('.pop-up').css('display', 'flex').hide().fadeIn();
  });

  $('.pop-up span').click(function() {
    $('.pop-up').fadeOut();
  });
