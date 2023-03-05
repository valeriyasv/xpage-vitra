const navItem = document.querySelector('.main-header__nav-item');

navItem.addEventListener('mouseover', (e) => {
  const hoverContent = document.querySelector('.santeh-list');
 hoverContent.classList.add('active')
})
