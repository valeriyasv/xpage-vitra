const inputSearch = document.querySelector('.main-header__search-text');
const search = document.querySelector('.main-header__search--icon');


search.addEventListener('click', () => { 
  search.classList.add('search-active');
  document.body.addEventListener('click', (e) => {
    if (!e.target.classList.contains('main-header__search-text') && !e.target.classList.contains('main-header__search--icon') && !e.target.classList.contains('main-header__search--btn') && !e.target.classList.contains('main-header__search-placehold') && !e.target.classList.contains('search-svg'))  {
      search.classList.remove('search-active');
    }
  })
})
