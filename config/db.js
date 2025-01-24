const { Sequelize } = require('sequelize');
const dbConf = require('./config'); // Путь к config.js

// Подключение к базе данных
const sequelize = new Sequelize(
  dbConf.development.database, // Имя базы данных
  dbConf.development.username, // Имя пользователя
  dbConf.development.password, // Пароль
  {
    host: dbConf.development.host, // Хост (обычно localhost)
    dialect: dbConf.development.dialect, // PostgreSQL
  // logging: console.log, // Вывод запросов в консоль (можно отключить)
  }
);

// Проверка подключения
sequelize.authenticate()
  .then(() => console.log('Connection to database successful'))
  .catch(err => console.error('Error connecting to database:', err));

// Экспорт экземпляра Sequelize
module.exports = sequelize;
