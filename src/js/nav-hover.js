const navItem = document.querySelector('.main-header__nav-item');

navItem.addEventListener('mouseover', (e) => {
    const hoverContent = document.querySelector('.santeh-list');
    const navList = document.querySelector('.main-header__nav')
    hoverContent.classList.add('active')
    
    const menuList = document.querySelector('.santeh-list__nav-santeh');
    
    console.log(menuList)
    menuList.addEventListener('mouseover', (e) => {
      const itemMenuImage = document.querySelector(`.santeh-list__prewiev-pict[data-name=${e.target.dataset.name}]`);
      const allItem = document.querySelectorAll('.santeh-list__prewiev-pict');
      allItem.forEach(item => {
        item.style.display = 'none';
      })
      itemMenuImage.style.display = 'block';
      console.log(itemMenuImage)
    })
    hoverContent.addEventListener('mouseleave', () => {
      hoverContent.classList.remove('active')
    })
    // navList.addEventListener('mouseleave', (e) => {
    //   if (!e.target.classList.contains('santeh-list'))
    //   hoverContent.classList.remove('active')
    // })
    
  })

  
