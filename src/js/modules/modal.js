function openModal(modalSelector, openSelector, closeSubstrate) {
    const modal = document.querySelector(modalSelector);
    const btn = document.querySelectorAll(openSelector);
    const scroll = calcScroll();
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
    btn.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            // clearTimeout(modalTimer);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
            
        });
    });
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