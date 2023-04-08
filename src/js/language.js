const lang = document.querySelector('.language');
const el = document.querySelector('.main-header__options-item.main-header__options-item--arr');


lang.addEventListener('mouseover', (e) => {
  el.style.borderRight = '1px solid #ffffff';
})

lang.addEventListener('mouseleave', () => {
  el.style.borderRight = '1px solid #E6E6E6';
})
