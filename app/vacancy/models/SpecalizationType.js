const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db'); 


const SpecalizationType = sequelize.define('SpecalizationType', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false, // Отключаем createdAt и updatedAt
});


module.exports = SpecalizationType;
