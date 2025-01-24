'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Countries', [
      { id: 1, name: 'Russia' },
      { id: 2, name: 'Kazakhstan' },
      { id: 3, name: 'Ukraine' },
      { id: 4, name: 'Belarus' },
      { id: 5, name: 'Uzbekistan' },
      { id: 6, name: 'Kyrgyzstan' },
      { id: 7, name: 'Tajikistan' },
      { id: 8, name: 'Turkmenistan' },
      { id: 9, name: 'Armenia' },
      { id: 10, name: 'Azerbaijan' },
      { id: 11, name: 'Georgia' },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Countries', null, {});
  },
};
