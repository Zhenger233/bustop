var express = require('express');
var router = express.Router();

var api = require('../api/line');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'api' });
});

router.get('/line/:linename',api.getline);
router.get('/lines/:stationname',api.station2lines)

module.exports = router;