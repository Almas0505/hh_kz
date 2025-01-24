const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); // Путь к db.js

const Skills = sequelize.define('Skills', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
}, {
  timestamps: false, // Отключаем createdAt и updatedAt
});

module.exports = Skills;
