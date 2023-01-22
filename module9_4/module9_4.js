const btn = document.querySelector('#button');

const useRequest = (v1,v2) => {
    return fetch(' https://picsum.photos/'+v1+'/'+v2);
}

btn.addEventListener('click', async() => {
    const value1 = +document.querySelector('#input1').value;
    const value2 = +document.querySelector('#input2').value;
    if (value1 === value1 && value1 >= 100 && value1 <= 300 && value2 === value2 && value2 >= 100 && value2 <= 300) {
        const requestResult = await useRequest(value1,value2);
        if (requestResult.ok) open(requestResult.url);
    } else {
        alert('одно из чисел вне диапазона от 100 до 300');
    }
});


