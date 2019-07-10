const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');
const fs = require('fs');

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const serialize = function(desiredAttributes){
  let toReturn = desiredAttributes;
  toReturn['num_of_ingredients'] = toReturn.ingredientLines.length
  delete toReturn.ingredientLines

  toReturn['cal_per_serving'] = parseFloat(toReturn.calories) / parseFloat(toReturn.yield);
  delete toReturn.calories
  delete toReturn.yield
}
var generateSeedData = async function(recipesPerFood = 10, filePath = './seeders/seedData.json'){
  let baseUrl = `https://api.edamam.com/search?app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_KEY}&from=0&to=${recipesPerFood}&q=`;

  let recipes = [];

  let attributes = ["url", "label", "ingredientLines", "calories", "yield"]

  let foods = await fetch("https://qs-jb-wp.herokuapp.com/api/v1/foods")
                      .then(res => { return res.json();})
                      .then(res => { return res.map(food => food.name)});


  for (let food of foods){
    let raw = await fetch(baseUrl + food.toLowerCase()).then(async (res) => {return res.json();});
    let desiredAttributes = await raw.hits.map(obj => {
      let r = obj.recipe;
      toReturn = {};
      for( attribute of attributes){
        toReturn[attribute] = r[attribute];
      }
      toReturn['baseFood'] = food;
      return toReturn;
    })

    recipes.push(...desiredAttributes);
    await sleep(20000);

  }
  recipes.map( recipe => { return serialize(recipe);});


  fs.writeFileSync(filePath, JSON.stringify(recipes, null, 2), 'utf-8');

}

generateSeedData();
// module.exports = generateSeedData;
