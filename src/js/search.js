document.addEventListener("DOMContentLoaded", function(event) {
const inputSearch = document.querySelector('.main-header__search-text');
const search = document.querySelector('.main-header__search--icon');
const logo = document.querySelector('.main-header__logo');

function resize() {
  if (window.innerWidth < 600) {
    // Изменение стилей для мобильных устройств
    logo.style.display = 'none';
    console.log('logo')
  } 
}
  
search.addEventListener('click', () => { 
  search.classList.add('search-active');
  resize();
  document.body.addEventListener('click', (e) => {
    if (!e.target.classList.contains('main-header__search-text') && !e.target.classList.contains('main-header__search--icon') && !e.target.classList.contains('main-header__search--btn') && !e.target.classList.contains('main-header__search-placehold') && !e.target.classList.contains('search-svg'))  {
      search.classList.remove('search-active');

      if (window.innerWidth < 600) {
        // Изменение стилей для мобильных устройств
        logo.style.display = 'block';
        console.log('logo')
      }
    }
  })
})
})