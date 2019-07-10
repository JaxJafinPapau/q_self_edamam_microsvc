const express = require('express');
const router = express.Router();
const Recipe = require('../../../models').Recipe;
const defaultHeader = ["Content-Type", "application/json"];
const {Sequelize} = require('../../../models');
const Op = Sequelize.Op;
const {sequelize} = require('../../../models');


router.get('/calorie_search', async function(req, res, next){
  res.setHeader(...defaultHeader);
  try {
    let[min, max] = req.query.q.split("-");
    if( max == undefined){ throw "Invalid Query String"; }
    let recipes = await Recipe.findAll({
      where:{
        cal_per_serving:{
          [Op.between]: [parseInt(min), parseInt(max)]
        }
      }
    })

    res.status(200).send({data: {recipes: recipes}});
  } catch (error) {
    res.status(404).send({error: error})
  }
})

router.get('/food_search', async function(req, res, next){
  res.setHeader(...defaultHeader);
  var formattedFood = req.query.q.charAt(0).toUpperCase() + req.query.q.slice(1)

  try {
    let recipes = await Recipe.findAll({
      where: {
        baseFood: formattedFood
      }
    })
    if (recipes[0] == undefined) { throw "Food not found."; }
    res.status(200).send({data: {recipes: recipes}})
  } catch (error) {
    res.status(404).send({error: error})
  }
})

router.get('/avg_calories', async function(req, res, next){
  res.setHeader(...defaultHeader)
  var formattedFood = req.query.q.charAt(0).toUpperCase() + req.query.q.slice(1)
  try {
    let avg_calories = await Recipe.findAll({
      where: {
        baseFood: formattedFood
      },
      attributes: [[sequelize.fn("AVG", sequelize.col("cal_per_serving")), "avg_calories"]]
    })
    let formattedAvg = avg_calories[0].dataValues.avg_calories
    if (formattedAvg == null) { throw "Food not found."; }
    res.status(200).send({data: {food: formattedFood, avg_calories: parseInt(formattedAvg)}})
  } catch (error) {
    res.status(404).send({error: error})
  }
})

router.get('/order_by_calories', async function(req, res, next){
  res.setHeader(...defaultHeader)
  var formattedFood = req.query.q.charAt(0).toUpperCase() + req.query.q.slice(1)
  try {
    let recipes = await Recipe.findAll({
      where: {
        baseFood: formattedFood
      },
      order: [["cal_per_serving", "ASC"]]
    })
    if (recipes[0] == undefined) { throw "Food not found."; }
    res.status(200).send({data: {food: formattedFood, recipes: recipes}})
  } catch (error) {
    res.status(404).send({error: error})
  }
})

module.exports = router;
