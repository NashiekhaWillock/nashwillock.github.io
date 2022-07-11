// Menu 
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('.navbar__logo');
const body = document.querySelector('body');

// Menu Toggle Function
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
}

// Event listener
menu.addEventListener('click', mobileMenu)