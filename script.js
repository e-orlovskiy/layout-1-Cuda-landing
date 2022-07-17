const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
   iconMenu.addEventListener('click', (e) => {
      document.body.classList.toggle('_lock'); //запрет скролла страницы
      iconMenu.classList.toggle('_active'); // анимация иконки бургера
      menuBody.classList.toggle('_active'); // мобильное меню бургера
   })
}

let menuLinks = document.querySelectorAll('.menu-link[data-goto]'); //не все объекты с классом menu-link, а с атрибутом data-goto


let onMenuLinkClick = (e) => {
   let menuLink = e.target;
   if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      let gotoBlock = document.querySelector(menuLink.dataset.goto);
      let gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY; // если бы была шапка, нужно было бы отнимать её высоту 

      if (iconMenu.classList.contains('_active')) {
         document.body.classList.toggle('_lock');
         iconMenu.classList.remove('_active');
         menuBody.classList.remove('_active');
      }

      window.scrollTo({
         top: gotoBlockValue,
         behavior: 'smooth'
      })
      e.preventDefault();
   }
}

if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', onMenuLinkClick);
   });
}

