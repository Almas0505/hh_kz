const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db'); 
const City = require('../../region/city')
const User = require('../../auth/User')
const Specalization = require('../../vacancy/models/Specalization')
const Company = require('../../auth/Company')
const Experience = require('./Experience')
const EmploymentType = require('../../employment-type/EmploymentType')



const Vacancy = sequelize.define('Vacancy', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salary_from: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  salary_to: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  salary_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  skills: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  about_company: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});
Vacancy.belongsTo(City, {
    foreignKey: 'cityId', // Внешний ключ в модели User // Псевдоним для ассоциации
  });
  Vacancy.belongsTo(User, {
    foreignKey: 'user_id', // Внешний ключ в модели User // Псевдоним для ассоциации
  });
  Vacancy.belongsTo(Company, {
    foreignKey: 'companyId',
    as:'company' // Внешний ключ в модели User // Псевдоним для ассоциации
  });
  Vacancy.belongsTo(Specalization, {
    foreignKey: 'specalizationId',
    as:'specalization' // Внешний ключ в модели User // Псевдоним для ассоциации
  });
  Vacancy.belongsTo(Experience, {
    foreignKey: 'experienceId',
    as:'experience' // Внешний ключ в модели User // Псевдоним для ассоциации
  });
  Vacancy.belongsTo(EmploymentType, {
    foreignKey: 'employmentTypeId',
    as:'employmentType' // Внешний ключ в модели User // Псевдоним для ассоциации
  });



module.exports = Vacancy;
