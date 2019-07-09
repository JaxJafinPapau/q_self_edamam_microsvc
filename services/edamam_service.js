const fetch = require('node-fetch')

module.exports = class EdamamService {
  constructor(food) {
    this.food = food
  }

  async getRecipes() {
    let response = await fetch(`https://api.edamam.com/search?q=${this.food}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_KEY}`)
    let data = await response.json()
    this.recipes = await data.hits
    return this
  }
}
