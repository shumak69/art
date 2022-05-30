import { getResourse } from "../services/requests";

function showMoreStyles(button, wrapper) {
    const btn = document.querySelector(button);
    // cards.forEach(item => {
    //     item.classList.add('animate__animated', 'animate__zoomIn');
    // });

    // btn.addEventListener('click', () => {
    //     cards.forEach(item => {
    //         item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });
    //     btn.remove();
    // });
    const container = document.querySelector('.styles .container');
        const spinner = document.createElement('img');
        spinner.setAttribute('src', '../../assets/img/spinner.gif');
        spinner.style.cssText = 'text-align: center; margin: 0 auto; display: block';
    btn.addEventListener('click', async function() {
        
        await container.appendChild(spinner);
        getResourse('../../assets/db.json').then(data => createCards(data.styles))
        .catch(error => {
            const err = document.createElement('div');
            container.appendChild(err);
            err.style.cssText = 'color: red; text-align: center; margin-bottom: 20px;';
            err.textContent = error;
        })
        .finally(setTimeout(() => spinner.remove(), 500));
        this.remove();
    });

    function createCards(response) {
        console.log(response);
        response.forEach((item) => {
            let card = document.createElement('div');
            card.classList.add('animate__animated', 'animate__zoomIn', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.innerHTML = `
            <div class="styles-block">
                <img src=${item.src} alt="style">
                <h4>${item.title}</h4>
                <a href=${item.link}>Подробнее</a>
            </div>
            `;
            document.querySelector(wrapper).appendChild(card);
        });
    }
}

export default showMoreStyles;

/* <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
    <div class=styles-block>
        <img src=assets/img/styles-8.jpg alt>
        <h4>Шарж</h4>
        <a href="#">Подробнее</a>
    </div>
</div>  */