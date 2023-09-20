var mainSwiper = new Swiper('.slider_main', {

    loop: false,
    autoplay: {
        delay: 3500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },

    speed: 3500,

    slidesPerView: 'auto',

    breakpoints: {
        320: {
            spaceBetween: 24,
        },
        1024: {
            spaceBetween: 25,
        },
        1120: {
            spaceBetween: 31,
        },
        1210: {
            spaceBetween: 37,
        },
        1280: {
            spaceBetween: 43,
        },
        1350: {
            spaceBetween: 49,
        },
        1450: {
            spaceBetween: 55
        }
    },

});

const sliderBg = new Swiper('.slider_bg', {

    loop: true,

    autoplay: {
        delay: 3500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },

    speed: 3500,

    slidesPerView: 'auto',

    breakpoints: {
        320: {
            spaceBetween: 24,
        },
        1020: {
            spaceBetween: 25,
        },
        1120: {
            spaceBetween: 27,
        },
        1210: {
            spaceBetween: 29,
        },
        1280: {
            spaceBetween: 31,
        },
        1350: {
            spaceBetween: 33,
        },
        1450: {
            spaceBetween: 35
        }
    },

});

sliderBg.allowTouchMove = false;
mainSwiper.allowTouchMove = false;

var mainSwiperMob = new Swiper('.slider_main_mobile', {

    autoplay: {
        delay: 3500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },

    speed: 3500,

    slidesPerView: 'auto',

    breakpoints: {
        320: {
            spaceBetween: 24,
        },
        1024: {
            spaceBetween: 26,
        }
    },

});

const sliderBgMob = new Swiper('.slider_bg_mobile', {

    autoplay: {
        delay: 3500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },

    speed: 3500,

    slidesPerView: 'auto',

    breakpoints: {
        320: {
            spaceBetween: 24,
        },
        1020: {
            spaceBetween: 26,
        }
    },

});

// sliderBgMob.controller.control = mainSwiperMob;

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

    spaceBetween: 150,

    grabCursor: true,

    speed: 900,
});

    var activeIndex;

  mainSwiper.on('click', function() {
    var index = mainSwiper.clickedIndex;
    zoomSwiper.slideTo(index, 0);
    zoomSwiper.update();
    $('.pop-up').css('display', 'flex').hide().fadeIn();
    document.body.style.overflow = 'hidden';
  });

  $('.span-close').click(function() {
    $('.pop-up').fadeOut();
    document.body.style.overflow = '';
  });

  const localImg = document.querySelector('.local-img');

localImg.addEventListener('mouseenter', () => {
  localImg.style.animation = 'jumpShake 0.5s ease-out forwards';
});

localImg.addEventListener('animationend', () => {
  localImg.style.animation = 'none';
});
