// 引入Sequelize模块
const Sequelize = require('sequelize');
// 引入数据库实例
const db = require('../db');
// 定义model
const Admin = db.define('Admin', {
  // 主键
  id: {type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
  // 用户名
  username: {type: Sequelize.STRING(20), allowNull: false},
  // 密码
  password: {type: Sequelize.STRING(36), allowNull: false},
  // 姓名
  role: {type: Sequelize.INTEGER, allowNull: true},
  // 角色
  name: {type: Sequelize.STRING(20), allowNull: true},
  // 上次登录时间
  lastLoginAt: {type: Sequelize.DATE}
}, {
  // 是否支持驼峰
  underscored: true,
  // MySQL数据库表名
  tableName: 'admin',
});
// 导出model
module.exports = Admin;