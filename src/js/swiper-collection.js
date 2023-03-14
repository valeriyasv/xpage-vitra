const swiper = new Swiper('.swiper-container-card', {
  // Options go here
  pagination: {
    el: '.swiper-pagination-card',
    clickable: true,
  },
  loop: true,
  slidesPerView: 2,
  spaceBetween: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 1
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0
    }
  },
  navigation: {
    nextEl: '.swiper-button-next-card',
    prevEl: '.swiper-button-prev-card',
  },
});



console.log(swiper)