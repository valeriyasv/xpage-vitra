const btn = document.querySelector('.main-header__burger');
const menu = document.querySelector('.menu');
const closeBurger = document.querySelector('.main-header__burger-close');
const santeh = document.querySelector('.menu__picture');
const santehList = document.querySelector('.menu-santeh');
const menuSan = document.querySelector('.menu__shell');


btn.addEventListener('click', () => {
  menu.style.display = 'block';
  menu.style.transform = 'translateX(100%)';
  closeBurger.style.display = 'flex';
  btn.style.display = 'none';
})

closeBurger.addEventListener('click', () => {
  closeBurger.style.display = 'none';
  btn.style.display = 'flex';
  menu.style.transform = '';
  santehList.style.transform = '';
})

santeh.addEventListener('click', () => {
  santehList.style.display = 'block';
  santehList.style.transform = 'translateX(100%)';
  menu.style.transform = '';
  console.log('kkkkkk')
})
