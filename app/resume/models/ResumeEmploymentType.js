const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');
const Resume = require('./Resume')
const EmploymentType = require('../../employment-type/EmploymentType')


const ResumeEmploymentType = sequelize.define('ResumeEmploymentType',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
      },
    }, {
        timestamps: false, // Отключаем createdAt и updatedAt
      });


    

Resume.belongsToMany(EmploymentType, {
     through: ResumeEmploymentType, foreignKey: 'resumeId',otherKey: 'employmentTypeId',
  });
EmploymentType.belongsToMany(Resume, {
    through: ResumeEmploymentType,foreignKey: 'employmentTypeId',otherKey: 'resumeId',
 });

 

//  Resume.hasMany(ResumeEmploymentType, {
//   foreignKey: 'resumeId', // Внешний ключ в модели User // Псевдоним для ассоциации
// });
// EmploymentType.hasMany(ResumeEmploymentType, {
//   foreignKey: 'employmentTypeId', // Внешний ключ в модели User // Псевдоним для ассоциации
// });



module.exports = ResumeEmploymentType