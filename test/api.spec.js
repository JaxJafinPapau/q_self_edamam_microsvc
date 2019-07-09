var shell = require('shelljs');
var request = require("supertest");
var app = require('../app');
var {sequelize} = require('../models');

var Recipe = require('../models').Recipe;

describe('api', () => {

  beforeAll(async () => {
    await shell.exec('npx sequelize db:create', {silent: true});
    await shell.exec('npx sequelize db:migrate', {silent: true});
  });

  afterAll(async() => {
    console.log("IN TEARDOWN");
    await shell.exec('npx sequelize db:migrate:undo:all', {silent: true});
    await shell.exec('npx sequelize db:drop', {silent: true});
    await sequelize.close();
  });

  describe('Test Recipe Paths', () => {

    test('GET api/v1/recipes/calorie_search?q=calorie_count', async () => {

    });

    test('GET api/v1/recipes/food_search?q=food_type', async () => {

    });

    test('GET api/v1/recipes/ingredient_search?q=num_of_ingredients', async () => {

    });
  });
});
