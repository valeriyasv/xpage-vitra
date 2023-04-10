const titlecompany = document.querySelector('.footer__nav-item--company');
const itemCompany = document.querySelectorAll('.footer__nav-company');

const titleProducts = document.querySelector('.footer__nav-item--products');
const itemProducts = document.querySelectorAll('.footer__nav-products');

const titleStore = document.querySelector('.footer__nav-item--store');
const itemStore = document.querySelectorAll('.footer__nav-store');

const footerList = document.querySelector('.footer__nav-list');

if (window.innerWidth < 1030) {

  titlecompany.addEventListener('click', () => {
      itemCompany.forEach(item => {
        if (item.style.display === 'none') {
          item.style.display = 'block';
          titlecompany.classList.add('opened');
        } else {
          item.style.display = 'none';
          titlecompany.classList.remove('opened');
        }
    })
  })
  
  titleProducts.addEventListener('click', () => {
    itemProducts.forEach(item => {
      if (item.style.display === 'none') {
        item.style.display = 'block';
        titleProducts.classList.add('opened')
      } else {
        item.style.display = 'none';
        titleProducts.classList.remove('opened');
      }
    })
  })
  
  titleStore.addEventListener('click', () => {
    itemStore.forEach(item => {
      if (item.style.display === 'none') {
        item.style.display = 'block';
        titleStore.classList.add('opened')
      } else {
        item.style.display = 'none';
        titleStore.classList.remove('opened');
      }
    })
  })
}
