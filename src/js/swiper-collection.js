const swiper2 = new Swiper('.swiper-container-card', {
  // Options go here
  spaceBetween: 30,
 
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,

  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

console.log(swiper2, 'swiper2')
