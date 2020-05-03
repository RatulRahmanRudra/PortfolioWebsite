const menuButton = document.querySelector('.menuButton');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menuBranding');
const menuNav = document.querySelector('.menuNav');
const navItems = document.querySelectorAll('.navItem');

let showMenu = false;

menuButton.addEventListener('click', function toggleMenu(){
    if(!showMenu){
        menuButton.classList.add('close');
        menu.classList.add('show');
        menuBranding.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(element => {
            element.classList.add('show');
        });
        showMenu = true;
    }  

    else{
        menuButton.classList.remove('close');
        menu.classList.remove('show');
        menuBranding.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(element => {
            element.classList.remove('show');
        });
        showMenu = false;
    }
});

