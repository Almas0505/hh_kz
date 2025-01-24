const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); // Импорт подключение
const Role = require('./role')
const Company = require('./Company')


// Определение модели User
const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true,
    validate: {
        isEmail:true
    } 
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
    unique:true,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: false, // Отключаем создание createdAt и updatedAt
});

User.belongsTo(Role, {
    foreignKey: 'roleId', // Внешний ключ в модели User // Псевдоним для ассоциации
  });
User.belongsTo(Company, {
    foreignKey: 'companyId', // Внешний ключ в модели User // Псевдоним для ассоциации
  });

module.exports = User;
