'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ResumeEmploymentTypes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      resumeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Resumes', // Имя таблицы, с которой связываем
          key: 'id',
        },
        onDelete: 'CASCADE', // Если резюме удалено, то запись в связующей таблице тоже будет удалена
      },
      employmentTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'EmploymentTypes', // Имя таблицы, с которой связываем
          key: 'id',
        },
        onDelete: 'CASCADE', // Если тип занятости удален, то запись в связующей таблице тоже будет удалена
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('ResumeEmploymentTypes');
  },
};
