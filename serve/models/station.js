// 引入Sequelize模块
const Sequelize = require('sequelize');

// 引入数据库实例
const db = require('../db');
const moment = require('moment');

// 定义model
const station = db.define('station', {
  station_id: {type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
  station_name: {type: Sequelize.STRING, allowNull: false},
  station_route_name: {type: Sequelize.STRING, allowNull: false},
  station_pos_longitude:{type: Sequelize.FLOAT}, 
  station_pos_latitude:{type: Sequelize.FLOAT} 
}, {
  // 是否支持驼峰
  underscored: true,
  // MySQL数据库表名
  tableName: 'station',
  timestamps: false,
  freezeTableName: true
});
module.exports = station;