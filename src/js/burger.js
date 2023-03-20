const btn = document.querySelector('.main-header__burger');
const menu = document.querySelector('.menu');
const closeBurger = document.querySelector('.main-header__burger-close');
const santehLink = document.querySelector('.menu__santeh-link');
const santehMob = document.querySelector('.menu-santeh');

btn.addEventListener('click', () => {
  menu.style.display = 'block';
  closeBurger.style.display = 'block';
  btn.style.display = 'none';
})

closeBurger.addEventListener('click', () => {
  closeBurger.style.display = 'none';
  btn.style.display = 'block';
  menu.style.display = 'none';
})

santehLink.addEventListener('click', () => {
  santehMob.style.display = 'block';
  menu.style.display = 'none';
})