'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultvalue: Sequelize.UUIDV4
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      appMetadata: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      Verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      permissions: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};