'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Experiences', [
      { id: 1, duration: 'Нет опыта' },
      { id: 2, duration: 'От 1 до 3 лет' },
      { id: 3, duration: 'От 3 до 6 лет' },
      { id: 4, duration: 'Более 6 лет' },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Experiences', null, {});
  },
};
