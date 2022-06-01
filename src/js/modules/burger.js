function burger (menuSelector, burgerSelector) {
    const menu = document.querySelector(menuSelector);
    const burgerElem = document.querySelector(burgerSelector);
    menu.style.display = 'none';

    burgerElem.addEventListener('click', () => {
        if(menu.style.display == 'none' && window.screen.availWidth <= 992) {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
    window.addEventListener('resize', () => {
        if(window.screen.availWidth > 992) {
            menu.style.display = 'none';
        }
    });
}

export default burger;