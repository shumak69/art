function slider(slides, direction, prev, next) {
    let curentSlide = 0;
    const items = document.querySelectorAll(slides);
    let paused = false;
    
    function showSlides() {
        if(curentSlide >= items.length) {
            curentSlide = 0;
        }

        if(curentSlide < 0) {
            curentSlide = items.length - 1;
        }
        items.forEach(item => {
            item.classList.add('animate__animated');
            item.style.display = 'none';
        });

        items[curentSlide].style.display = 'block';
    }

    showSlides();

    // function nextSlides {
    //     showSlides();    
    // }
    try {
        const prevBtn = document.querySelector(prev);
        const nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            curentSlide --;
            showSlides();
            items[curentSlide].classList.remove('animate__slideInRight');
            items[curentSlide].classList.add('animate__slideInLeft');
            
        });

        nextBtn.addEventListener('click', () => {
            curentSlide ++;
            showSlides();
            items[curentSlide].classList.remove('animate__slideInLeft');
            items[curentSlide].classList.add('animate__slideInRight');
        });
    } catch(e){}

    function activateAnimation() {
        if(direction === 'vertical') {
            paused = setInterval(() => {
                curentSlide ++;
                showSlides();
                items[curentSlide].classList.add('animate__slideInUp');
            }, 5000);
        } else {
            paused = setInterval(() => {
                curentSlide ++;
                showSlides();
                items[curentSlide].classList.remove('animate__slideInLeft');
                items[curentSlide].classList.add('animate__slideInRight');
            }, 5000);
        }
    }
    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });
    activateAnimation();
    
}

export default slider;