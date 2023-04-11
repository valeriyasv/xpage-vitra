const swiper2 = new Swiper('.swiper-container-card', {

  // on: {
  //   slideChange: function () {
  //     const activeSlideIndex = this.activeIndex; // получаем индекс текущего слайда
  //     const cards = document.querySelectorAll('.cards'); // находим все карточки

  //     cards.forEach((card, index) => {
  //       if (index === activeSlideIndex) { // если индекс карточки совпадает с индексом текущего слайда
  //         card.style.transform = 'translateX(0)'; // применяем стиль для выезжания карточки на экран
  //       } else {
  //         card.style.transform = 'translateX(-100%)'; // применяем стиль для скрытия карточки, которая не связана с текущим слайдом
  //       }
  //     });
  //   },
  // },
  // Options go here
  spaceBetween: 30,
 
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,

  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-button-next-card',
    prevEl: '.swiper-button-prev-card',
  },
});

console.log(swiper2, 'swiper2')
