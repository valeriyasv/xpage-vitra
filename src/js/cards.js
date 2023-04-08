const btnPlus = document.querySelectorAll('.collection__btn-plus')
const wrapperSwiper = document.querySelector('.swiper-container-card');
const cardMob = document.querySelector('.card-mobile');
const card = document.querySelector('.card');

btnPlus.forEach((item)  => {

  item.addEventListener('click', (e) => {
    const itemMenuImage = document.querySelector(`.card[data-name=${e.target.dataset.name}]`);
    console.log(itemMenuImage)
    const allItem = document.querySelectorAll('.card');
    allItem.forEach(item => {
      item.classList.remove('card-active')
    })
  itemMenuImage.classList.add('card-active')
  if (window.innerWidth < 900) {
    // Изменение стилей для мобильных устройств
    wrapperSwiper.style.overflow = 'visible';
    itemMenuImage.classList.add('card-mobile');
    itemMenuImage.classList.add('card-active');
    itemMenuImage.classList.add('show');
    // cardMob.style.transform = 'translateY(100%)';
    body.style.backgroundColor = '#f2f2f2'
    allItem.forEach(item => {
      item.classList.remove('card-active')
    })
  }
  const activeBtn = document.querySelector(`.collection__btn-plus-black[data-name=${e.target.dataset.name}]`);
  
  const allBtn = document.querySelectorAll('.collection__btn-plus-black');
  allBtn.forEach(item => {
    item.classList.remove('black-active')
  })
  activeBtn.classList.add('black-active');
})

})
