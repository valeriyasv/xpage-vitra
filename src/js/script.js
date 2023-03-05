const swiper = new Swiper('.swiper-container', {
  // Options go here
  slidesPerView: 1.1,
  spaceBetween: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
});

console.log(swiper)