const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); 
const Country = require('./Country')

const City = sequelize.define('City', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false, // Отключаем createdAt и updatedAt
});
City.belongsTo(Country, {
    foreignKey: 'countryId', // Внешний ключ в модели User // Псевдоним для ассоциации
  });

module.exports = City;
