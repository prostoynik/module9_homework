document.querySelector('button').onclick = function () {
    const value = +document.querySelector('input').value;
    if (value === value && value >= 1 && value <= 10) {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
            document.querySelector('textarea').value = xhr.response;
        };

        xhr.onerror = function() {
            alert('Ошибка запроса');
        };
        xhr.open("get", "https://picsum.photos/v2/list?limit="+value, true);
        xhr.send();

    } else {
        alert('число вне диапазона от 1 до 10');
        document.querySelector('textarea').value = '';
    }

};



//
