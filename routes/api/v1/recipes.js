const express = require('express');
const router = express.Router();
const Recipe = require('../../../models').Recipe;
const defaultHeader = ["Content-Type", "application/json"];
const {Sequelize} = require('../../../models');
const Op = Sequelize.Op;

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
  try {
    let foodType = req.query.q;
    let recipes = await Recipe.findAll({
      where:{
        baseFood: foodType
      }
    });
    if (foodType[0] == undefined) { throw "Invalid Query String" };
    if (recipes[0] == undefined) {
      // make api call, serialize, and return json
    } else {
      // For each recipe in recipes serialize and return json
    };
  } catch (error) {
    res.status(404).send({error: error})
  }
})

module.exports = router;
