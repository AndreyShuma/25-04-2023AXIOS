console.log('hello start fronend page');

const tovar = document.querySelector('.tovar');

const run = async () => {
    const result = await axios.get('/user/tovar');
    console.log('result>>>>', result);

    const arrayTovar = result.data.map((item) => {
        console.log('item >>>', item);
        const test = `<div>${item.name}, ціна: ${item.price} грн, id товару: ${item.id}</div>`
        return test;
    });

    tovar.innerHTML = arrayTovar.join('');

};

run();
