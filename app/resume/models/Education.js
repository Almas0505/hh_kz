const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db'); 
const Resume = require('./Resume')




const Education = sequelize.define('Education', {
  level: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  university_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  faculty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  major: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
    timestamps: false, // Отключаем createdAt и updatedAt
  });

  Education.belongsTo(Resume, {
    foreignKey: 'resumeId', // Внешний ключ в модели User // Псевдоним для ассоциации
  });
  Resume.hasMany(Education,{foreignKey:'resumeId'})



module.exports = Education;
