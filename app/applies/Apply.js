const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); 
const Resume = require('../resume/models/Resume')
const Vacancy = require('../vacancy2/models/Vacancy')



const Apply = sequelize.define('Apply', {
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Apply.belongsTo(Resume, {
    foreignKey: 'resumeId',
    as:'resume' // Внешний ключ в модели User // Псевдоним для ассоциации
  });
Apply.belongsTo(Vacancy,{
    foreignKey:'vacancyId',
    as:'vacancy'})



module.exports = Apply;
