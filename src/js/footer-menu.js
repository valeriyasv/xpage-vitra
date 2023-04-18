const titlecompany = document.querySelector('.footer__nav-item--company');
const itemCompany = document.querySelector('.list-company');

const titleProducts = document.querySelector('.footer__nav-item--products');
const itemProducts = document.querySelector('.list-products');

const titleStore = document.querySelector('.footer__nav-item--store');
const itemStore = document.querySelector('.list-store');

const footerList = document.querySelector('.footer__nav-list');

if (window.innerWidth < 1030) {

  titlecompany.addEventListener('click', () => {
        if (!itemCompany.classList.contains('list-active')) {
          itemCompany.classList.add('list-active')
          titlecompany.classList.add('opened');
        } else {
          itemCompany.classList.remove('list-active')
          titlecompany.classList.remove('opened');
        }
  })
  
  titleProducts.addEventListener('click', () => {
      if (!itemProducts.classList.contains('list-active')) {
        itemProducts.classList.add('list-active')
        titleProducts.classList.add('opened')
      } else {
        itemProducts.classList.remove('list-active')
        titleProducts.classList.remove('opened');
      }
  })
  
  titleStore.addEventListener('click', () => {
      if (!itemStore.classList.contains('list-active')) {
        itemStore.classList.add('list-active')
        titleStore.classList.add('opened')
      } else {
        itemStore.classList.remove('list-active')
        titleStore.classList.remove('opened');
      }
  })
}
