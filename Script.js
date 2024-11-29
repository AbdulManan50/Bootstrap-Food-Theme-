var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    navigation: {
      nextEl: '.custom-swiper-button-next', 
      prevEl: '.custom-swiper-button-prev', 
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });