import { getResourse } from "../services/requests";

function calc(size, material, option, promocode, result, state) {   
    const sizeBlock = document.querySelector(size);
    const materialBlock = document.querySelector(material);
    const optionBlock = document.querySelector(option);
    const promocodeBlock = document.querySelector(promocode);
    const resultBlock = document.querySelector(result);

    getResourse('../../assets/db.json').then(data => {
        function foo(block, i) {
            for(let key in data.calc[i]) {
                block.forEach(item => {
                    if(key === item.textContent) {
                        item.value = data.calc[i][key];
                    }
                });
            }
        }
        foo(sizeBlock, 0);
        foo(materialBlock, 1);
        foo(optionBlock, 2);
    });
    let sum = 0;
    function calcFunction () {
        sum = Math.round(+sizeBlock.value * +materialBlock.value + (+optionBlock.value));

        if(sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = 'Пожалуйста выберете размер и материал картины';
        } else if(promocodeBlock.value.trim() === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
        state.size = sizeBlock.value;
        state.material = materialBlock.value;
        state.option = optionBlock.value;
        state.amount = resultBlock.textContent;
        console.log(sizeBlock.forEach(item => console.log(item.value)));
    }   
    sizeBlock.addEventListener('change', calcFunction);
    materialBlock.addEventListener('change', calcFunction);
    optionBlock.addEventListener('change', calcFunction);
    promocodeBlock.addEventListener('input', calcFunction);
}
export default calc;