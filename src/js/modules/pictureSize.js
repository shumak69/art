function picture () {
    const sizeBlock = document.querySelectorAll('.sizes-block');
    const img = document.querySelectorAll('.sizes-block img');
    sizeBlock.forEach((item, i) => {
        item.addEventListener('mouseover', () => {
            item.children.forEach(item => {
                if(item.tagName != "IMG" && !item.classList.contains('sizes-hit')) {
                    item.style.display = 'none';
                }
            });
            item.classList.add('animate__animated', 'animate__fadeIn');
            img[i].setAttribute('src', `assets/img/sizes-${i + 1}-1.png`);
        });
        item.addEventListener('mouseleave', () => {
            item.children.forEach(item => {
                if(item.tagName != "IMG" && !item.classList.contains('sizes-hit')) {
                    item.style.display = 'block';
                }
            });
            item.classList.remove('animate__fadeIn');
            img[i].setAttribute('src', `assets/img/sizes-${i + 1}.png`);
        });
    });
}
export default picture;