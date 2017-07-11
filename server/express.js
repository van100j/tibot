const express = require('express');
const compression = require('compression');

const app = express();
// const router = express.Router();
//
// router.use('/*', function(req, res){
//   return res.sendFile('index.html', {
//     root: 'client/dist/'
//   });
// });
// app.use(router);
app.use(compression());
app.use(express.static('client/dist'))

module.exports = app;
