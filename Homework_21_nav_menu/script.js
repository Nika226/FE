const menu_icon = document.querySelector ('#menu_icon');
const nav_menu = document.querySelector('.nav_menu');

menu_icon.addEventListener('click', () => {
nav_menu.classList.toggle('activ')
});
