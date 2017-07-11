const dotenv = require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? 'test.env' :
    (process.env.NODE_ENV === 'production' ? 'production.env' : '.env')
});
const server = require('./server');
const app = require('./server/express');
const socket = require('./server/websocket');

server.on('request', app);

server.listen(process.env.PORT || 3000, () => {
  console.info(`server/ws started on port ${process.env.PORT}`); // eslint-disable-line no-console
});
