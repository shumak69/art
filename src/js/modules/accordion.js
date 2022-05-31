function accordion (buttonsSelector) {
    const btns = document.querySelectorAll(buttonsSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if(this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            } else {
                this.nextElementSibling.style.maxHeight = '0';
            }
        });
    });
        // items = document.querySelectorAll(itemsSelector);

    // items.forEach(item => {
    //     item.classList.add('animate__animated', 'animate__fadeInDown');
    // });

    // btns.forEach(item => {
    //     item.addEventListener('click', function () {
    //         if(!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });
}

export default accordion;