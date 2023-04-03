const titlecompany = document.querySelector('.footer__nav-item--company');
const itemCompany = document.querySelectorAll('.footer__nav-company');

const titleProducts = document.querySelector('.footer__nav-item--products');
const itemProducts = document.querySelectorAll('.footer__nav-products');

const titleStore = document.querySelector('.footer__nav-item--store');
const itemStore = document.querySelectorAll('.footer__nav-store');

titlecompany.addEventListener('click', () => {
    itemCompany.forEach(item => {
    item.style.display = 'block';
  })
})

titleProducts.addEventListener('click', () => {
  itemProducts.forEach(item => {
    item.style.display = 'block';
  })
})

titleStore.addEventListener('click', () => {
  itemStore.forEach(item => {
    item.style.display = 'block';
  })
})