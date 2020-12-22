// 引入Sequelize模块
const Sequelize = require('sequelize');

// 引入数据库实例
const db = require('../db');
const moment = require('moment');

// 定义model
const transfer = db.define('transfer', {
  transfer_route_id: {type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
  transfer_route_name: {type: Sequelize.STRING, allowNull: false},
  transfer_route_1: {type: Sequelize.STRING, allowNull: false},
  transfer_route_2: {type: Sequelize.STRING, allowNull: false},
  transfer_route_3: {type: Sequelize.STRING, allowNull: false},
  transfer_route_4: {type: Sequelize.STRING, allowNull: false},
  transfer_route_5: {type: Sequelize.STRING, allowNull: false},
  transfer_route_6: {type: Sequelize.STRING, allowNull: false},
  transfer_route_7: {type: Sequelize.STRING, allowNull: false},
  transfer_route_8: {type: Sequelize.STRING, allowNull: false},
  transfer_route_9: {type: Sequelize.STRING, allowNull: false},
  transfer_route_10: {type: Sequelize.STRING, allowNull: false},
  transfer_route_11: {type: Sequelize.STRING, allowNull: false},

}, {
  // 是否支持驼峰
  underscored: true,
  // MySQL数据库表名
  tableName: 'transfer',
  timestamps: false,
  freezeTableName: true
});
module.exports = transfer;