// 引入Sequelize模块
const Sequelize = require('sequelize');
// 引入数据库实例
const db = require('../db');
// 定义model
const feed = db.define('feed', {
  // 主键
  id: {type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
  uid:{type:Sequelize.INTEGER},
  content:{type:Sequelize.STRING(65535)},
  time: {type: Sequelize.DATE}
}, {
  // 是否支持驼峰
  underscored: true,
  // MySQL数据库表名
  tableName: 'feedback',
});
// 导出model
module.exports = feed;