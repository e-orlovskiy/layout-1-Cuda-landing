const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
   iconMenu.addEventListener('click', (e) => {
      document.body.classList.toggle('_lock'); //запрет скролла страницы
      iconMenu.classList.toggle('_active'); // анимация иконки бургера
      menuBody.classList.toggle('_active'); // мобильное меню бургера
   })
}