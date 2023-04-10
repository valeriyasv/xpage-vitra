const btn = document.querySelector('.main-header__burger');
const menu = document.querySelector('.menu');
const closeBurger = document.querySelector('.main-header__burger-close');
const santeh = document.querySelector('.menu__picture');
const santehList = document.querySelector('.menu-santeh');
const menuSan = document.querySelector('.menu__shell');
const prevMenu = document.querySelector('.menu__santeh-link');


btn.addEventListener('click', () => {
  menu.style.left = '0';
  closeBurger.style.display = 'flex';
  btn.style.display = 'none';
})

closeBurger.addEventListener('click', () => {
  closeBurger.style.display = 'none';
  btn.style.display = 'flex';
  menu.style.left = '-376px';
  santehList.style.left = '-376px';
  menu.style.transform = '';
  santehList.style.transform = '';
})

santeh.addEventListener('click', () => {
  menu.style.left = '-376px';
  santehList.style.left = '0';
  console.log('kkkkkk')
})

prevMenu.addEventListener('click', () => {
  santehList.style.left = '-376px';
  menu.style.left = '0';
  console.log('kkkkkk')
})
