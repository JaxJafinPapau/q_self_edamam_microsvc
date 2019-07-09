'use strict';
var seed_data = require('./seedData.json')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Recipes", seed_data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Recipes", null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
