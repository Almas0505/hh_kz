'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AuthCodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      valid_till: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },{
      timestamps: false, // Отключаем создание createdAt и updatedAt
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AuthCodes');
  }
};
