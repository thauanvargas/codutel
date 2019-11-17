const express = require('express');
const routes = require('./routes');


const server = express();

// User.create({name: 'Thauan', email: 'thauan@outlook.pt', password: '1234'});

server.use(express.json());
server.use(routes);

server.listen(3000);