'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Posts', {
      postId: {
        type: Sequelize.UUID,
        defaultvalue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      userId: {
        allowNull: false,
        type: Sequelize.UUID
      },
      userName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING,
        alowNull: false
      },
      caption: {
        type: Sequelize.TEXT
      },
      cuisine: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      gf: {
        type: Sequelize.BOOLEAN
      },
      vegan: {
        type: Sequelize.BOOLEAN
      },
      vegetarian: {
        type: Sequelize.BOOLEAN
      },
      restaurantId: {
        type: Sequelize.STRING
      },
      restaurantName: {
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
    return queryInterface.dropTable('Posts');
  }
};