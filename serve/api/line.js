//const { body,validationResult } = require("express-validator");
const lineModel=require('../models/line');
const stationModel=require('../models/station');
const busModel=require('../models/bus');
const async = require('async');
const sequelize = require('../db');
exports.getline = function(req, res, next) {
    //res.send('hi,line '+req.params.linename);
    lineModel.findAll({
        where: {
            route_name: req.params.linename
        }
    }).then(function (result) {
        let list = [];
        result.forEach((v,i) => {list.push(v.route_station);});
        //console.log('\ngetline:\n',list[0].split(','),'\n');
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
        //console.log('\nstation2lines:\n',list,'\n');
        res.json(list);
    });
}
exports.getstations=function(req,res,next){
    sequelize.query(' select distinct station_name from station;')
    .then((result)=>{
        console.log(result);
        let list=[];
        result[0].forEach((v,i)=>{
            list.push(v.station_name);
        })
        res.json(list);
    })
}
exports.getallbus=function(req,res){
    busModel.findAll().then((result)=>{console.log(result);res.send(result);});
    //sequelize.query('select * from bus');
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