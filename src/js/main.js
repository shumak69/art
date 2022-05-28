import openModal from "./modules/modal";

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
        }
    }, 3000);
    
    openModal('.popup-design','.button-design', 'popup-design', /* modalTimer */);
    openModal('.popup-consultation','.button-consultation', 'popup-consultation', /* modalTimer */);
});