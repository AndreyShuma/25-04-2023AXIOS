const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    // console.log('req.params >>>>', req.params);
    // console.log('req.query >>>>', req.query);
    res.render('profileEJS');
});


router.get('/name', (req, res) => {
    const profile =[
        {id : 1, name : 'Андрій', age : 30, gender: 'male'},
        {id : 2, name : 'Оксана', age : 35, gender: 'female'},
        {id : 3, name : 'Марина', age : 20, gender: 'female'},
        {id : 4, name : 'Андрій', age : 40, gender: 'male'},
        {id : 5, name : 'Сашко',  age : 28, gender: 'male'}
    ];

    const arr = [...profile];

    console.log('GET параметри для роутінгу >>>>> req.query.name >>>>>', req.query.name);
    console.log('GET параметри для роутінгу >>>>> req.query.age >>>>>', req.query.age);

    if(req.query.gender) {
        let data = arr.filter( item => item.gender === req.query.gender);
        res.json(data);
        return;
    }
    if(req.query.name) {
        let data = arr.filter( item => item.name === req.query.name);
        res.json(data);
        return;
    }

    // if(req.query.name && req.query.age) {
    //     let data = arr.filter( (item) => ((item.name  === req.query.name ) && (item.age === req.query.age)));
    //     res.json(data);
    //     console.log('data >>>>>', data);
    //     console.log('req.query.name', req.query.name);
    //     console.log('req.query.age', req.query.age);
    //     return;
    // }

     res.json(profile);
});

module.exports = router;