'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cities', {
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
      countryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Countries', // Название таблицы, на которую ссылается внешний ключ
          key: 'id',          // Поле, на которое ссылается внешний ключ
        },
        onUpdate: 'CASCADE',   // Обновление внешнего ключа при изменении
        onDelete: 'CASCADE',   // Удаление города при удалении страны
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Cities');
  },
};
