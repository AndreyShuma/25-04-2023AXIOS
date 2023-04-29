const express = require('express');
const userRouter = require('./router/user');
const profile = require('./router/porofile');

const server = express();

console.log('Server RUN >>>>>');

server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');

server.use(express.static(__dirname + '/public'));

server.use('/user', userRouter);
server.use('/profile', profile);
// kjgjui
server.listen(3000);