// 引入Sequelize模块
const Sequelize = require('sequelize');

// 引入数据库实例
const db = require('../db');

// 定义model
const bus = db.define('bus', {
  bus_id: {type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
  bus_name: {type: Sequelize.STRING},
  bus_destination: {type: Sequelize.STRING},
  bus_direction:{type: Sequelize.INTEGER}, 
  bus_nowStation_id:{type: Sequelize.INTEGER},
  bus_stationID_range_low:{type: Sequelize.INTEGER},
  bus_stationID_range_high:{type:Sequelize.INTEGER},
  bus_updateTime:{type: Sequelize.DATE}
}, {
  // 是否支持驼峰
  underscored: false,
  // MySQL数据库表名
  tableName: 'bus',
  timestamps: false,
  freezeTableName: true
});
module.exports = bus;