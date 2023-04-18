const swiper2Element = document.querySelector('.swiper-container-card');

if (swiper2Element) {
  const swiper2 = new Swiper(swiper2Element, {
  
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
  console.log(swiper2, 'swiper2');
}  else {
  console.log('Swiper container not found.');
}