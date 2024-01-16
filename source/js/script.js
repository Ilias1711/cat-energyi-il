let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-header__toggle');


navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-nav--closed');
  navToggle.classList.toggle('main-header__toggle--opened');
});
