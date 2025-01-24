const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db'); 
const Resume = require('./Resume')




const ForeignLanguage = sequelize.define('ForeignLanguage', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
    timestamps: false, // Отключаем createdAt и updatedAt
  });

  ForeignLanguage.belongsTo(Resume, {
    foreignKey: 'resumeId', // Внешний ключ в модели User // Псевдоним для ассоциации
  });

  Resume.hasMany(ForeignLanguage,{foreignKey:'resumeId'})


module.exports = ForeignLanguage;
