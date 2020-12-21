// 引入Sequelize模块
const Sequelize = require('sequelize');

// 引入数据库实例
const db = require('../db');
const moment = require('moment');

// 定义model
const line = db.define('line', {
  route_id: {type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
  route_name: {type: Sequelize.STRING, allowNull: false},
  route_station: {type: Sequelize.TEXT, allowNull: false},
  route_price:{type:Sequelize.FLOAT,allowNull:false},
  route_updateTime:{type:Sequelize.DATE}
  
}, {
  // 是否支持驼峰
  underscored: false,
  // MySQL数据库表名
  tableName: 'route',
  timestamps: false,
  freezeTableName: true
});
module.exports = line;





/*
| route_id         | int(11)     | NO   | PRI | NULL    | auto_increment |
| route_name       | varchar(50) | NO   |     | NULL    |                |
| route_station    | text        | NO   |     | NULL    |                |
| route_price      | float       | NO   |     | NULL    |                |
| route_updateTime | datetime
 */