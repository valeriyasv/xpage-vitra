const btnPlus = document.querySelectorAll('.collection__btn-plus');
const wrapperSwiper = document.querySelector('.swiper-container-card');
const allItem = document.querySelectorAll('.card');
const body = document.body;
const backgroundColBody = document.querySelector('.overlay');

btnPlus.forEach((item) => {
  item.addEventListener('click', (e) => {
    const itemMenuImage = document.querySelector(`.card[data-name=${e.target.dataset.name}]`);
    allItem.forEach(item => {
      item.classList.remove('card-active')
    });
    itemMenuImage.classList.add('card-active');
    
    const activeBtn = document.querySelector(`.collection__btn-plus-black[data-name=${e.target.dataset.name}]`);
    const allBtn = document.querySelectorAll('.collection__btn-plus-black');
    
    allBtn.forEach(item => {
      item.classList.remove('black-active')
    });
    activeBtn.classList.add('black-active');
  });
});

if (window.innerWidth < 1030) {
  wrapperSwiper.style.overflow = 'visible';
  // body.classList.add('overlay');
  const itemMenuImage = document.querySelector('.card.card-mobile');
  allItem.forEach(item => {
    item.classList.remove('card-active')
  });
  itemMenuImage.classList.add('card-active');
  
//   document.addEventListener('click', function(e) {
//     if (!e.target.closest('.card-active') && !e.target.closest('.collection__btn-plus')) {
//       const modal = document.querySelector('.card-active');
//       if (modal) {
//         modal.classList.remove('card-active');
//         document.body.classList.remove('overlay');
//       }
//     }
// })

}