const navItem = document.querySelector('.main-header__nav-item.main-header__nav-item--sant');

navItem.addEventListener('mouseover', (e) => {
    const hoverContent = document.querySelector('.santeh-list');
    const navList = document.querySelector('.main-header__nav')
    hoverContent.classList.add('active')
    
    const menuList = document.querySelector('.santeh-list__nav-santeh');
    
    console.log(menuList)
    menuList.addEventListener('mouseover', (e) => {
      const itemMenuImage = document.querySelector(`.santeh-list__prewiev-pict[data-name=${e.target.dataset.name}]`);
      const twoMenu = document.querySelector(`.santeh-list__nav-common[data-name=${e.target.dataset.name}]`);
      const allItem = document.querySelectorAll('.santeh-list__prewiev-pict');
      const categor = document.querySelectorAll('.santeh-list__nav-common');
      allItem.forEach(item => {
        item.style.display = 'none';
      })
      categor.forEach(item => {
        item.style.display = 'none';
        console.log(item, 'pppppp')

      })

      console.log(e.target.classList.contains('santeh-list__nav-santeh-link'))
      twoMenu.style.display = 'block';
      itemMenuImage.style.display = 'block';
      console.log(itemMenuImage)
    })
    
    hoverContent.addEventListener('mouseleave', () => {
      hoverContent.classList.remove('active')
    })

    
  })

  
