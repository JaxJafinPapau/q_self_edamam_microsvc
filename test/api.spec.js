var shell = require('shelljs');
var request = require("supertest");
var app = require('../app');
var {sequelize} = require('../models');
var testRecipes = []

var Recipe = require('../models').Recipe;

describe('api', () => {

  beforeAll(async () => {
    await shell.exec('npx sequelize db:create', {silent: true});
    await shell.exec('npx sequelize db:migrate', {silent: true});
    for( let i = 1; i <= 6; i++){
      let recipe = await Recipe.create({
        url: `www.example${i}.com`,
        label: `Calories${i*100}`,
        cal_per_serving: i*100,
        num_of_ingredients: i,
        baseFood: `Food${(i % 2) + 1}`
      })
      testRecipes.push(recipe)
    }
  });

  afterAll(async() => {
    console.log("IN TEARDOWN");
    await shell.exec('npx sequelize db:migrate:undo:all', {silent: true});
    await shell.exec('npx sequelize db:drop', {silent: true});
    await sequelize.close();
  });
  
  describe('Test Recipe Paths', () => {
    describe('GET api/v1/recipes/calorie_search?q=calorie_count', () => {

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
                      expect(returnedRecipe).toHaveProperty('id', testRecipes[0].id);
                    }
                  }
                })


      });

    });

    describe('Test food_type path', () => {
      test('GET api/v1/recipes/food_search?q=food_type', async () => {
        return request(app)
        .get('/api/v1/recipes/food_search?q=food1')
        .then(async function(response){
          expect(response.statusCode).toBe(200);
          expect(response.body).toHaveProperty("data")
          expect(response.body.data).toHaveProperty("recipes");

          let returnedRecipes = response.body.data.recipes;
          expect(returnedRecipes).toHaveLength(3)
          for( let returnedRecipe of returnedRecipes){
            expect(returnedRecipe).toHaveProperty('id');
            expect(returnedRecipe).toHaveProperty('label');
            expect(returnedRecipe).toHaveProperty('url');
            expect(returnedRecipe).toHaveProperty('cal_per_serving');
            expect(returnedRecipe).toHaveProperty('baseFood', 'Food1')

            if( returnedRecipe.label === "Calories100" ){
              expect(returnedRecipe).toHaveProperty('url', 'www.example1.com');
              expect(returnedRecipe).toHaveProperty('cal_per_serving', 100);
              expect(returnedRecipe).toHaveProperty('id', testRecipes[0].id);
            }
          }
        })
      });

      test('failure; inappropriate query string', async () => {
        return request(app)
                .get('/api/v1/recipes/food_search?q=NonExistentFood')
                .then(async function(response){
                  expect(response.statusCode).toBe(404);
                  expect(response.body).toHaveProperty("error", "Food not found.");
                })
      });

    })

    describe('GET api/v1/recipes/ingredient_search?q=num_of_ingredients', () => {
      test('success', async () => {

        return request(app)
                .get('/api/v1/recipes/ingredient_search?q=4')
                .then(async function(response){
                  expect(response.statusCode).toBe(200);
                  expect(response.body).toHaveProperty("data");
                  expect(response.body.data).toHaveProperty("recipes");

                  let returnedRecipes = response.body.data.recipes;
                  expect(returnedRecipes).toHaveLength(1)
                  for( let returnedRecipe of returnedRecipes){
                    expect(returnedRecipe).toHaveProperty('id');
                    expect(returnedRecipe).toHaveProperty('label');
                    expect(returnedRecipe).toHaveProperty('url');
                    expect(returnedRecipe).toHaveProperty('cal_per_serving');

                    if( returnedRecipe.label === "Calories400" ){
                      expect(returnedRecipe).toHaveProperty('url', 'www.example4.com');
                      expect(returnedRecipe).toHaveProperty('cal_per_serving', 400);
                      expect(returnedRecipe).toHaveProperty('id', testRecipes[3].id);
                    }
                  }
                })
      })

      test('failure; no parameter specified', async () => {

        return request(app)
                .get('/api/v1/recipes/ingredient_search')
                .then(async function(response){
                  expect(response.statusCode).toBe(404);
                  expect(response.body).toHaveProperty("error", "Invalid Parameters");

                })
      })

      test('failure; negative parameter', async () => {

        return request(app)
                .get('/api/v1/recipes/ingredient_search?q=-1')
                .then(async function(response){
                  expect(response.statusCode).toBe(404);
                  expect(response.body).toHaveProperty("error", "Invalid Parameters");

                })
      })
    });

    describe('GET /api/v1/recipes/avg_calories?q=food_type', () => {
      test('SUCCESS', async () => {
        return request(app)
        .get('/api/v1/recipes/avg_calories?q=Food1')
        .then(async function(response) {
          expect(response.statusCode).toBe(200)
          expect(response.body).toHaveProperty("data")
          expect(response.body.data).toHaveProperty("food", "Food1")
          expect(response.body.data).toHaveProperty("avg_calories", 400)
        })
      })
      test('FAILURE invalid food', async () => {
        return request(app)
        .get('/api/v1/recipes/avg_calories?q=NonExistentFood')
        .then(async function(response) {
          expect(response.statusCode).toBe(404)
          expect(response.body).toHaveProperty("error", "Food not found.")
        })
      })
    })
    describe('GET /api/v1/recipes/order_by_calories?q=food_type', () => {
      test('SUCCESS', async () => {
        return request(app)
        .get('/api/v1/recipes/order_by_calories?q=Food1')
        .then(async function(response) {
          expect(response.statusCode).toBe(200)
          expect(response.body).toHaveProperty("data")
          expect(response.body.data).toHaveProperty("food", "Food1")
          expect(response.body.data).toHaveProperty("recipes")
          expect(response.body.data.recipes).toHaveLength(3)
          for(let i = 0; i < 3; i++) {
            expect(response.body.data.recipes[i]).toHaveProperty("id", testRecipes[(i*2)+1].id)
            expect(response.body.data.recipes[i]).toHaveProperty("url", testRecipes[(i*2)+1].url)
            expect(response.body.data.recipes[i]).toHaveProperty("label", testRecipes[(i*2)+1].label)
            expect(response.body.data.recipes[i]).toHaveProperty("cal_per_serving", testRecipes[(i*2)+1].cal_per_serving)
            expect(response.body.data.recipes[i]).toHaveProperty("num_of_ingredients", testRecipes[(i*2)+1].num_of_ingredients)
          }
        })
      })
      test('FAILURE invalid food', async () => {
        return request(app)
        .get('/api/v1/recipes/order_by_calories?q=NonExistentFood')
        .then(async function(response) {
          expect(response.statusCode).toBe(404)
          expect(response.body).toHaveProperty("error", "Food not found.")
        })
      })
    })
  });
});
