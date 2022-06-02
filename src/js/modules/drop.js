import {postData} from '../services/requests';

function drop() {
    const fileInputs = document.querySelectorAll('[name="upload"]');
    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) {
        // item.closest('.file_upload').style.border = "5px solid yellow";
        item.closest('.file_upload').style.backgroundColor = "rgba(53,2,0,.3)";
    }

    function unhighlight(item) {
        if(item.closest('.calc_form') ) {
            item.closest('.file_upload').style.backgroundColor = "#fff";
        } else if (item.closest('main')) {
            item.closest('.file_upload').style.backgroundColor = '#f7e7e6';
        }
        else {
            item.closest('.file_upload').style.backgroundColor = "#ededed";
        }
        item.closest('.file_upload').style.border = "none";
    }
    ['dragover', 'dragenter'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });
    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);
        });
    });
    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let dots;
            const a = input.files[0].name.split('.');
            a[0].length > 6 ? dots = '...' : dots = '.';
            const name =a[0].slice(0, 6) + dots +  a[1];
            input.previousElementSibling.textContent = name;
            if(input.closest('.main')) {
                const formData = new FormData();
                formData.append('file', input.files[0]);
                postData('assets/server.php', formData)
                .then(data => console.log(data))
                .catch(() => {
                    console.log('Error');
                });
            }
        });
    });
}

export default drop;