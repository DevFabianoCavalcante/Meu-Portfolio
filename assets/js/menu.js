const btnCloseMenu = document.querySelector('#btn-close-menu');
const btnOpenMenu = document.querySelector('#btn-open-menu');
const menuArea = document.querySelector('.menu-mobile');

const visibilityMenuMobile = () => {
    const windowWidth = window.innerWidth;
    setInterval(()=> {
        (windowWidth > 540) ? btnOpenMenu.classList.add('display-menu') : btnOpenMenu.classList.remove('display-menu');
    }, 500);
}

const openMenuMobile = () => {
    menuArea.classList.toggle('display-menu');
    btnOpenMenu.classList.toggle('display-menu');
};

const closeMenuMobile = () => {
    menuArea.classList.toggle('display-menu');
    btnOpenMenu.classList.toggle('display-menu');
};

visibilityMenuMobile();

btnOpenMenu.addEventListener('click', openMenuMobile);
btnCloseMenu.addEventListener('click', closeMenuMobile);
