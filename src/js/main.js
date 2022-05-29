import openModal from "./modules/modal";
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        let display = false;
        document.querySelectorAll('[data-modal]').forEach(item => {
            if(getComputedStyle(item).display !== 'none') {
                display = true;
            }
        });
        if(!display) {
            document.querySelector('.popup-consultation').style.display = 'block';
            document.body.style.overflow = 'hidden';
            let div = document.createElement('div');
            div.style.overflowY = 'scroll';
            div.style.visibility = 'hidden';

            document.body.appendChild(div);
            let scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();
            document.body.style.marginRight = `${scrollWidth}px`;
        }
    }, 60000);
    
    openModal('.popup-design','.button-design', 'popup-design');
    openModal('.popup-consultation','.button-consultation', 'popup-consultation');
    openModal('.popup-gift', '.fixed-gift', 'popup-gift', true);
    slider('.main-slider-item', 'vertical');
    slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
});