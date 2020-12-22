// 默认dev配置
const config = {
  // 是否调试模式
  DEBUG: true,
  // MySQL数据库配置
  MYSQL: {
    host: 'localhost',
    database: 'BusStop',
    username: 'root',
    password: '123456'
  }
};

if (process.env.NODE_ENV === 'production') {
  // 生产环境MySQL数据库配置
  config.MYSQL = {
    host: 'aaa.mysql.rds.aliyuncs.com',
    database: 'aaa',
    username: 'aaa',
    password: 'aaa'
  };
}
// 导出配置
module.exports = config;