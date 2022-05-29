function checkTextInputs(selector) {
    const textInputs = document.querySelectorAll(selector);
    textInputs.forEach(item => {
        item.addEventListener('keypress', function(e) {
            if(e.key.match(/[^а-яё 0-9 , .]/ig)) {
                e.preventDefault();
            }
        });
        item.addEventListener('input', () => {
            if (item.value.match(/[a-z]/ig)) {
               item.value = '';
            }
         });
    });
}

export default checkTextInputs;