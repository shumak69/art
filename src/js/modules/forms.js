function forms(state) {
    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    // const phoneInputs = document.querySelectorAll('input[name="user_phone"]');
    const upload = document.querySelectorAll('[name="upload"]');

    // phoneInputs.forEach(item => {
    //     item.addEventListener('input', () => {
    //         item.value = item.value.replace(/[^(\+)|\d]/ig, '');
    //     });
    // });

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await res.text();
    };
    function clearInput () {
        inputs.forEach(item => {
            item.value = '';
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = "Файл не выбран";
        });
    }

    upload.forEach(item => {
        item.addEventListener('input', () => {
            let dots;
            const a = item.files[0].name.split('.');
            a[0].length > 6 ? dots = '...' : dots = '.';
            const name =a[0].slice(0, 6) + dots +  a[1];
            item.previousElementSibling.textContent = name;
        });
    });

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animate__animated', 'animate__fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animate__animated', 'animate__fadeInUp');
            statusMessage.appendChild(statusImg);
            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);
            const formData = new FormData(item);
            let api;
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
            console.log(api);

            postData(api, formData).then(res => {
                console.log(res);
                statusImg.setAttribute('src', message.ok);
                textMessage.textContent = message.success;
            }).catch(() =>  {
                statusImg.setAttribute('src', message.fail);
                textMessage.textContent = message.failure;
            })
            .finally(() => {
                clearInput();
                setTimeout(() => {
                    statusMessage.remove();
                    item.style.display = 'block';
                    item.classList.remove('animate__fadeOutUp');
                    item.classList.add('animate__fadeInUp');
                }, 5000);
                state = {};
            });
            
        });
    });
}

export default forms;