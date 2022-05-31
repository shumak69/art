function filter() {
    const menu = document.querySelector(".portfolio-menu"),
        items = menu.querySelectorAll('li'),
        btnAll = menu.querySelector('.all'),
        btnLovers = menu.querySelector('.lovers'),
        btnChef = menu.querySelector('.chef'),
        btnLGirl = menu.querySelector('.girl'),
        btnGuy = menu.querySelector('.guy'),
        btnGrandmother = menu.querySelector('.grandmother'),
        btnGranddad = menu.querySelector('.granddad'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        markLovers = wrapper.querySelectorAll('.lovers'),
        markChef = wrapper.querySelectorAll('.chef'),
        markGirl = wrapper.querySelectorAll('.girl'),
        markGuy = wrapper.querySelectorAll('.guy'),
        markGrandmother = wrapper.querySelectorAll('.grandmother'),
        markGranddad = wrapper.querySelectorAll('.granddad'),
        no = document.querySelector('.portfolio-no');
    
    function typeFilter (markType) {
        markAll.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('animate__animated', 'animate__fadeIn');
        });
        no.style.display = 'none';
        no.classList.remove('animate__animated', 'animate__fadeIn');
        if(markType) {
            markType.forEach(item => {
                item.style.display = 'block';
                item.classList.add('animate__animated', 'animate__fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animate__animated', 'animate__fadeIn');
        }
    }
    btnAll.addEventListener('click', () => {
        typeFilter(markAll);
        
    });
    btnLovers.addEventListener('click', () => {
        typeFilter(markLovers);
        
    });
    btnLGirl.addEventListener('click', () => {
        typeFilter(markGirl);
        
    });
    btnChef.addEventListener('click', () => {
        typeFilter(markChef);
        
    });
    btnGuy.addEventListener('click', () => {
        typeFilter(markGuy);
        
    });
    btnGrandmother.addEventListener('click', () => {
        typeFilter();
        
    });
    btnGranddad.addEventListener('click', () => {
        typeFilter();
        
    });
    menu.addEventListener('click', (e) => {
        if(e.target && e.target.tagName === "LI") {
            items.forEach(item => item.classList.remove('active'));
            e.target.classList.add('active');
        }
    });
    
}

export default filter;