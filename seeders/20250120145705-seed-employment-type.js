'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('EmploymentTypes', [
      { id: 1, name: 'Полная занятость' },
      { id: 2, name: 'Частичное занятость' },
      { id: 3, name: 'Проектная работа' },
      { id: 4, name: 'Волонтерство' },
      { id: 5, name: 'Стажировка' },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('EmploymentTypes', null, {});
  },
};
