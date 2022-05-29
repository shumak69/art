function mask (selector) {
    let setCursorPosition = (pos, elem) => {
        elem.focus();

        if(elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
        // elem.addEventListener('click', () => {
        //     elem.selectionStart = elem.selectionEnd = elem.value.length;
        //  });
        elem.addEventListener('click', () => {
            if ((pos - 1) < 2) {
                elem.setSelectionRange(pos, pos);
                console.log(pos); // всегда выводит 2
            }
       });
    };
    
    function createMask(event) {
        let matrix = '+38 (0__) ___ __ __';
        let i = 0;
        let def = matrix.replace(/\D/g, '');
        let val = this.value.replace(/\D/g, '');
        console.log(this);
        if(def.length >= val.length) {
            val = def;
        }
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) :  i >= val.length ? '' : a;
        });

        if(event.type === 'blue') {
            if(this.value.length == 2) {
                this.value = '';
            } 
            else {
                setCursorPosition(this.value.length, this);
            }
        }
    }
    let inputs = document.querySelectorAll(selector);
    inputs.forEach(item => {
        item.addEventListener('input', createMask);
        item.addEventListener('focus', createMask);
        item.addEventListener('blur', createMask);
    });
    
}

export default mask;