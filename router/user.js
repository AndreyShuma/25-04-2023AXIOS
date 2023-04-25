const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

const tovar =[
    {id : 1, name : 'яблуко', massa : 1, price : 10},
    {id : 2, name : 'груша', massa : 1, price : 35},
    {id : 3, name : 'слива', massa : 1, price : 50},
    {id : 4, name : 'абрикоса', massa : 1, price : 40},
    {id : 5, name : 'капуста', massa : 1, price : 8}
];

router.get('/tovar', (req, res) => {
    res.json(tovar);
});

module.exports = router;