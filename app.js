const express = require('express');
const userRouter = require('./router/user');

const server = express();

console.log('Server RUN >>>>>');

server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');

server.use(express.static(__dirname + '/public'));

server.use('/user', userRouter);

server.listen(3000);