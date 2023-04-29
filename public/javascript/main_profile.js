console.log('hello start fronend page');

const tovar = document.querySelector('.tovar');

const run = async () => {
    const result = await axios.get('/profile/name?name=Андрій&age=40', {params: {a : 20}});
    console.log('result>>>>', result);

    const arrayTovar = result.data.map((item) => {
        const test = `<div> ${item.name}, мені ${item.age} років, стать ${item.gender}</div>`
        return test;
    });

    tovar.innerHTML = arrayTovar.join('');

};

run();
console.log('stop');
