const swiper = new Swiper('.swiper-container-main', {
  // Options go here
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    // 768: {
    //   slidesPerView: 1.1
    // },

    900: {
      slidesPerView: 1.1
    },

    // 1500: {
    //   slidesPerView: 1.5
    // },

    // 1900: {
    //   slidesPerView: 2
    // },

    // 2600: {
    //   slidesPerView: 2.5
    // },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    // prevEl: '.swiper-button-prev',
  },
});



console.log(swiper, 'swiper')