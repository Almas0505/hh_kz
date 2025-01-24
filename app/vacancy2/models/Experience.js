const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db'); // Путь к db.js

const Experience = sequelize.define('Experience', {
  duration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
}, {
  timestamps: false, // Отключаем createdAt и updatedAt
});

module.exports = Experience;
