const btnPlus = document.querySelectorAll('.collection__btn-plus');
const wrapperSwiper = document.querySelector('.swiper-container-card');
const allItem = document.querySelectorAll('.card');

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
    
    if (window.innerWidth < 1030) {
      wrapperSwiper.style.overflow = 'visible';
      allItem.forEach(item => {
        item.classList.remove('card-active')
      });
  }
});
});

itemMenuImage.classList.add('card-active');