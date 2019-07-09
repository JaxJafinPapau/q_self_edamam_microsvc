const express = require('express');
const router = express.Router();
const Recipe = require('../../../models').Recipe;
const defaultHeader = ["Content-Type", "application/json"];
const {Sequelize} = require('../../../models');
const Op = Sequelize.Op;

router.get('/calorie_search', async function(req, res, next){
  res.setHeader(...defaultHeader);
  let[min, max] = req.query.q.split("-");

  let recipes = await Recipe.findAll({
    where:{
      cal_per_serving:{
        [Op.between]: [parseInt(min), parseInt(max)]
      }
    }
  })

  res.status(200).send({data: {recipes: recipes}});
})

module.exports = router;
