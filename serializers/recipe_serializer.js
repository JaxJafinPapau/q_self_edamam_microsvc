module.exports = class RecipeSerializer {
  constructor(recipes, foodType) {
    this.recipes = recipes
    this.foodType = foodType
  }

  calculateCalories(servings, total_calories) {
    return (total_calories/servings)
  }

  serializeRecipes() {
    let recipes = [];
    let limit = recipes.length
    for (let i = 0; i < limit; i++) {
      recipes.push({
        url: this.recipes[i].recipe.url,
        label: this.recipes[i].recipe.label,
        cal_per_serving: calculateCalories(this.recipes[i].recipe.yield, this.recipes[i].recipe.calories),
        baseFood: this.foodType
      })
    }
    return recipes
  }
//   var arr = [];
// var len = oFullResponse.results.length;
// for (var i = 0; i < len; i++) {
//     arr.push({
//         key: oFullResponse.results[i].label,
//         sortable: true,
//         resizeable: true
//     });
// }
}
