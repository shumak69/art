import openModal from "./modules/modal";
import slider from './modules/slider';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filter from './modules/filter';
import picture from './modules/pictureSize';
import accordion from './modules/accordion';

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
    const state = {};
    openModal('.popup-design','.button-design', 'popup-design');
    openModal('.popup-consultation','.button-consultation', 'popup-consultation');
    openModal('.popup-gift', '.fixed-gift', 'popup-gift', true);
    slider('.main-slider-item', 'vertical');
    slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    calc('#size', '#material', '#options', '.promocode', '.calc-price', state);
    forms(state);
    mask("[name='phone']");
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
    filter();
    picture();
    accordion('.accordion-heading');
});