const Role = require('../app/auth/role')

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert two records into the 'Roles' table using queryInterface
    await queryInterface.bulkInsert('Roles', [
      { name: 'employee'},
      { name: 'manager'},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Revert the changes (remove the inserted records)
    await queryInterface.bulkDelete('Roles', null, {});
  },
};
