const navItem = document.querySelector('.main-header__nav-item.main-header__nav-item--sant');

navItem.addEventListener('mouseover', (e) => {
  const hoverContent = document.querySelector('.santeh-list');
  const navList = document.querySelector('.main-header__nav')
  hoverContent.classList.add('active')

  const menuList = document.querySelector('.santeh-list__nav-santeh');

  console.log(menuList)
  menuList.addEventListener('mouseover', (e) => {
    const currentDataName = e.target.dataset.name;
    const itemMenuImage = document.querySelector(`.santeh-list__prewiev-pict[data-name=${currentDataName}]`);
    const twoMenu = document.querySelector(`.santeh-list__nav-common[data-name=${currentDataName}]`);
    const allItem = document.querySelectorAll('.santeh-list__prewiev-pict');
    const categor = document.querySelectorAll('.santeh-list__nav-common');
    
    twoMenu.style.display = 'block';
    itemMenuImage.style.display = 'block';
    allItem.forEach(item => {
      if (item.dataset.name !== currentDataName) {
        item.style.display = 'none';
      }
    });
  
    categor.forEach(item => {
      if (item.dataset.name !== currentDataName) {
        item.style.display = 'none';
      }
    });
  })

  hoverContent.addEventListener('mouseleave', () => {
    hoverContent.classList.remove('active')
  })

})