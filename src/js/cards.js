const allItem = document.querySelectorAll('.card');
const body = document.body;
const html = document.documentElement;

function openCard(e) {
  const itemMenuImage = document.querySelector(`.card[data-name=${e.target.dataset.name}]`);
  allItem.forEach(item => {
    item.classList.remove('card-active');
  });
  itemMenuImage.classList.add('card-active');
  if (window.innerWidth < 1030) {
    body.classList.add('no-scroll');
    dimmer = document.createElement('div');
    dimmer.classList.add('dimmer');
    document.body.appendChild(dimmer);
  }

  const activeBtn = document.querySelector(`.collection__btn-plus-black[data-name=${e.target.dataset.name}]`);
  const allBtn = document.querySelectorAll('.collection__btn-plus-black');
  
  allBtn.forEach(item => {
    item.classList.remove('black-active');
  });
  activeBtn.classList.add('black-active');
}

function closeCard() {
  allItem.forEach(item => {
    item.classList.remove('card-active');
  });
  if (window.innerWidth < 1030) {
    body.classList.remove('no-scroll');
    if (dimmer !== null) {
      dimmer.parentNode.removeChild(dimmer);
      dimmer = null;
    }
  }
}

document.addEventListener('click', function(event) {
  if (window.innerWidth < 1030 && !event.target.closest('.card') && !event.target.closest('.collection__btn-plus') || event.target.closest('.card__close')) {
    closeCard();
  }
});

const btnPlus = document.querySelectorAll('.collection__btn-plus');

btnPlus.forEach((item) => {
  item.addEventListener('click', openCard);
});