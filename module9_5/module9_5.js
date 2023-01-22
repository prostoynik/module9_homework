const btn = document.querySelector('button');

const useRequest = (v1,v2) => {
    return fetch(`https://picsum.photos/v2/list?page=${v1}&limit=${v2}`)
}

function inBetween(value,begin,end) {
    if (value === value && value >= begin && value <= end) return true
    else return false;
}

window.onload = function (ev){
    let lr = localStorage.getItem('lastResult');

    let parse = JSON.parse(lr);

    let res = document.querySelector('#images');
    res.replaceChildren();

    for (item of parse){
        let img = document.createElement('IMG');
        img.setAttribute('src', item.download_url);
        img.setAttribute('alt', item.author);
        img.setAttribute('width', '200');
        res.append(img);
    }
}

btn.addEventListener('click', async() => {
    const value1 = +document.querySelector('#input1').value;
    const value2 = +document.querySelector('#input2').value;
    const begin = 1;
    const end = 10;

    if (!inBetween(value1, begin, end) && !inBetween(value2, begin, end)) {
        alert(`Номер страницы и лимит вне диапазона от ${begin} до ${end}`);
    } else if (!inBetween(value1, begin, end)) {
        alert(`Номер страницы и лимит вне диапазона от ${begin} до ${end}`);
    } else if (!inBetween(value2, begin, end)) {
        alert(`Лимит вне диапазона от ${begin} до ${end}`);
    } else {
        const requestResult = await useRequest(value1,value2);
        if (requestResult.ok) {
            const arr = await requestResult.json();
            localStorage.clear();
            localStorage.setItem('lastResult', JSON.stringify(arr));

            let res = document.querySelector('#images');
            res.replaceChildren();

               for (item of arr){
                   let img = document.createElement('IMG');
                   img.setAttribute('src', item.download_url);
                   img.setAttribute('alt', item.author);
                   img.setAttribute('width', '200');
                   res.append(img);
                }
            }
        else {

        }
    }
})


