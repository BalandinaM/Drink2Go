let navMain = document.querySelector('.header__nav');
let navToggle = document.querySelector('.nav__button');
let userNav = document.querySelector('.header__user-nav');

navMain.classList.remove ('header__nav--nojs');
userNav.classList.remove ('header__user-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('header__nav--closed')) {
    navMain.classList.remove('header__nav--closed');
    navMain.classList.add('header__nav--open');
  } else {
    navMain.classList.remove('header__nav--open');
    navMain.classList.add('header__nav--closed');
  }
});

