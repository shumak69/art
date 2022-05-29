
let k = 0;
function openModal(modalSelector, openSelector, closeSubstrate, destroy = false) {
    const modal = document.querySelector(modalSelector);
    const btn = document.querySelectorAll(openSelector);
    const scroll = calcScroll();
    const allModals = document.querySelectorAll('[data-modal]');
   function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }
    function giftByScroll (){
        if(window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            document.querySelector('.fixed-gift').click();
            console.log('2');
        }
    }
    btn.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            if(destroy) {
                item.remove();
            }
            // clearTimeout(modalTimer);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
            window.removeEventListener('scroll', giftByScroll);
            
        });
    });
    allModals.forEach(item => {
        item.classList.add('animate__animated', 'animate__zoomIn');
    });
    if(!k) {
        window.addEventListener('scroll', giftByScroll);
    }
    k++;
    modal.addEventListener('click', (e) => {
        if((e.target.classList.contains(closeSubstrate) || 
        (e.target.classList.contains('popup-close')))) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            document.body.style.marginRight = `0`;
        }
    });
    
}

export default openModal;