const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); // Путь к db.js

const AuthCode = sequelize.define('AuthCode', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valid_till: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  timestamps: false, // Отключаем createdAt и updatedAt
});

module.exports = AuthCode;
