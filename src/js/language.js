const language = document.querySelector('.language');
const el = document.querySelector('.main-header__options-item.main-header__options-item--arr');


language.addEventListener('mouseover', (e) => {
  el.style.borderRight = '1px solid #ffffff';
})

language.addEventListener('mouseleave', () => {
  el.style.borderRight = '1px solid #E6E6E6';
})
