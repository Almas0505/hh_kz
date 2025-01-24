const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); // Импорт подключение

// Определение модели Role
const Role = sequelize.define('Role', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER // Используйте DataTypes вместо Sequelize
  },
  name: {
    type: DataTypes.STRING, // Используйте DataTypes вместо Sequelize
    allowNull: false,
    unique: true
  }
}, 
{
  timestamps: false, // Отключаем createdAt и updatedAt
});

module.exports = Role;
