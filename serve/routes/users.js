var express = require('express');
var router = express.Router();

var api = require('../api/admin');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'users' });
});

router.get('/login', function(req, res, next) {
  res.sendFile('admin.html',{root:__dirname});
});
router.post ('/login', api.login);

// 定义单条管理员路由，GET请求
router.get ('/info/:id', api.info);

// 定义添加管理员路由，POST请求
router.post ('/add', api.add);
// router.post('/add',function(req,res){
//   res.send(req.body);
// })
router.get('/add',function(req,res){
  res.sendFile('admin.html',{root:__dirname});
})

// 定义修改管理员路由，PUT请求
router.get('/change',function(req,res){
  res.sendFile('admin.html',{root:__dirname});
});

router.post ('/change', api.update);
// 定义删除管理员路由，DELETE请求
router.get('/delete',function(req,res){
  res.sendFile('admin.html',{root:__dirname});
})
router.post ('/delete', api.remove);

module.exports = router;
