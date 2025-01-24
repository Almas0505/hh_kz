'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ForeignLanguages', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      level: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      resumeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Resumes', // Имя таблицы для связи
          key: 'id',
        },
        onDelete: 'CASCADE', // Если резюме удалено, то удаляется и знание языка
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('ForeignLanguages');
  },
};
