const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); // Импорт подключение
const { default: isEmail } = require('validator/lib/isEmail');

// Определение модели User
const Company = sequelize.define('Company', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  }}, {
    timestamps: false, // Отключаем createdAt и updatedAt
  });

module.exports = Company;
