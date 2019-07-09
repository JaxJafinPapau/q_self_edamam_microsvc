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
    describe('GET api/v1/recipes/calorie_search?q=calorie_count', () => {
      beforeAll( async() => {
        for( let i = 1; i <= 6; i++){
          let recipe = await Recipe.create({
            url: `www.example${i}.com`,
            label: `Calories${i*100}`,
            cal_per_serving: i*100
          })

          if( i === 1){
            var recipe1 = recipe
          }
        }
      });

      test('failure; inappropriate query string', async () => {
        return request(app)
                .get('/api/v1/recipes/calorie_search?q=290510')
                .then(async function(response){
                  expect(response.statusCode).toBe(404);
                  expect(response.body).toHaveProperty("error", "Invalid Query String");
                })
      });

      test('success', async () => {


        return request(app)
                .get('/api/v1/recipes/calorie_search?q=290-510')
                .then(async function(response){
                  expect(response.statusCode).toBe(200);
                  expect(response.body).toHaveProperty("data");
                  expect(response.body.data).toHaveProperty("recipes");

                  let returnedRecipes = response.body.data.recipes;
                  expect(returnedRecipes).toHaveLength(3)
                  for( let returnedRecipe of returnedRecipes){
                    expect(returnedRecipe).toHaveProperty('id');
                    expect(returnedRecipe).toHaveProperty('label');
                    expect(returnedRecipe).toHaveProperty('url');
                    expect(returnedRecipe).toHaveProperty('cal_per_serving');

                    if( returnedRecipe.label === "Calories100" ){
                      expect(returnedRecipe).toHaveProperty('url', 'www.example1.com');
                      expect(returnedRecipe).toHaveProperty('cal_per_serving', 100);
                      expect(returnedRecipe).toHaveProperty('id', recipe1.id);
                    }
                  }
                })


      });

    });

    test('GET api/v1/recipes/food_search?q=food_type', async () => {

    });

    test('GET api/v1/recipes/ingredient_search?q=num_of_ingredients', async () => {

    });
  });
});
