const swiperContainer = document.querySelector('.swiper-container-main');

if (swiperContainer) {
  const swiper = new Swiper(swiperContainer, {
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
      900: {
        slidesPerView: 1.1
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
    },
  });
  console.log(swiper, 'swiper');
} else {
  console.log('Swiper container not found.');
}


