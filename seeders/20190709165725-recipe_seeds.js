'use strict';
var seedData = require('./seedData.json')
var seedDataWithTimes = seedData.map( seed => {
  seed.createdAt = new Date();
  seed.updatedAt = new Date();

  return seed
})
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Recipes", seedDataWithTimes, {})
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
