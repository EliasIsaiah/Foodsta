'use strict';

const { uuid } = require('uuidv4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Posts', [{
      // id: uuid.fromString('testUUID'),
      id: "2584b3a7-c0cc-447d-b657-64c62a169fcf",
      userName: "Elias Roussos",
      title: 'TITLE test title',
      caption: 'caption test caption',
      cuisine: 'chinese',
      image: 'http://placekitten.com/g/200/300',
      rating: '7',
      gf: 'false',
      vegan: 'false',
      vegetarian: 'true',
      RestaurantId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
