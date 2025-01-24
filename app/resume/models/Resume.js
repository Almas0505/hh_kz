const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db'); 
const City = require('../../region/city')
const User = require('../../auth/User')
const Country = require('../../region/Country')


const Resume = sequelize.define('Resume', {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  about: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  salary_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  main_language: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  skills: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

});
Resume.belongsTo(City, {
    foreignKey: 'cityId', // Внешний ключ в модели User // Псевдоним для ассоциации
  });
Resume.belongsTo(User, {
    foreignKey: 'user_id', // Внешний ключ в модели User // Псевдоним для ассоциации
  });
Resume.belongsTo(Country, {
    foreignKey: 'citizenship', // Внешний ключ в модели User // Псевдоним для ассоциации
  });

module.exports = Resume;
