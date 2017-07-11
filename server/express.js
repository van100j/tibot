const express = require('express');

const app = express();
const router = express.Router();

router.use('/*', function(req, res){
  return res.sendFile('index.html', {
    root: 'client/dist/'
  });
});
app.use(router);

module.exports = app;
