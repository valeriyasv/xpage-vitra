const swiper = new Swiper('.swiper-container', {
  // Options go here
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 1
    },
    768: {
      slidesPerView: 1.1,
      spaceBetween: 1
    }
  }
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
});



console.log(swiper)