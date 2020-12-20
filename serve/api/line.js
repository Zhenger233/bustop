//const { body,validationResult } = require("express-validator");
const lineModel=require('../models/line');
const stationModel=require('../models/station');
const async = require('async');
exports.getline = function(req, res, next) {
    //res.send('hi,line '+req.params.linename);
    var lines = lineModel.findAll({
        where: {
            route_name: req.params.linename
        }
    }).then(function (result) {
        let list = [];
        result.forEach((v,i) => {list.push(v.route_station);});
        console.log('\n1111111111111111:\n',list[0].split(','),'\n');
        res.json(list[0].split(','));
    });
};
exports.station2lines=function(req,res,next){
    // res.json(req.params);
    stationModel.findAll({
        where: {
            station_name: req.params.stationname
        }
    }).then(function (result) {
        let list = [];
        result.forEach((v,i) => {list.push(v.station_route_name);});
        //const a=list[0].route_station.split(',');
        console.log('\n1111111111111111:\n',list,'\n');
        res.json(list);
    });
}
/*
test=line.findAll({
        where: {
            route_name: '成都地铁4号线'
        }
    }).then(function (result) {
          // 查询结果处理

          // 定义一个空数组list，用来存放最终结果
          let list = [];
          // 遍历SQL查询出来的结果，处理装入list
          result.forEach((v,i) => {
            let obj = {
              route_station: v.route_station
            };
            list.push(obj);
          });
          console.log('\n1111111111111111:\n',list[0].route_station,'\n');
          // 通过async提供的回调，返回数据到下一个async方法
        });
 */