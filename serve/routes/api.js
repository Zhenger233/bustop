var express = require('express');
var router = express.Router();

var api = require('../api/line');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'api' });
});


router.get('/line/:linename',api.getline);
router.get('/lines/:stationname',api.station2lines);
router.get('/stations',api.getstations);
router.get('/allstations',api.getstations);
router.get('/allbus',api.getallbus);
// router.get('/search',function(req,res){
//   res.sendFile('search.html',{root:__dirname});
// })
router.get('/search',api.searchlines);

module.exports = router;