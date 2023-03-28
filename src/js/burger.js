const btn = document.querySelector('.main-header__burger');
const menu = document.querySelector('.menu');
const closeBurger = document.querySelector('.main-header__burger-close');
const santehLink = document.querySelector('.menu__santeh-link');
const santehMob = document.querySelector('.menu__shell');

btn.addEventListener('click', () => {
  menu.style.display = 'block';
  closeBurger.style.display = 'block';
  btn.style.display = 'none';
  menu.style.display = 'flex';
  menu.style.transform = menu.style.transform === 'translateX(0)' ? 'translateX(100%)' : 'translateX(0)';
})
santehLink.addEventListener('click', () => {
  console.log(santehMob)
  santehMob.style.display = 'block';
  menu.style.display = 'none';
})

closeBurger.addEventListener('click', () => {
  closeBurger.style.display = 'none';
  btn.style.display = 'block';
  menu.style.display = 'none';
})
