'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Specalizations', {
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
      specalizationTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'SpecalizationTypes', // Name of the target table
          key: 'id',                  // Key in the target table
        },
        onUpdate: 'CASCADE',          // Update behavior
        onDelete: 'SET NULL',         // Delete behavior
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Specalizations');
  },
};
