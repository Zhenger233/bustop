var express = require('express');
var router = express.Router();

var api = require('../api/admin');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.write();
});

router.get('/login', function(req, res, next) {
  res.sendFile('admin.html',{root:__dirname});
});
router.post ('/login', api.login);

module.exports = router;
