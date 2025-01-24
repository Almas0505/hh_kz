const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db'); 
const SpecalizationType = require('./SpecalizationType')

const Specalization = sequelize.define('Specalization', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false, // Отключаем createdAt и updatedAt
});

Specalization.belongsTo(SpecalizationType, {
    foreignKey: 'specalizationTypeId', // Внешний ключ в модели User // Псевдоним для ассоциации
  });
SpecalizationType.hasMany(Specalization, {
    foreignKey: 'specalizationTypeId', // Внешний ключ в модели User // Псевдоним для ассоциации
  })
module.exports = Specalization;
