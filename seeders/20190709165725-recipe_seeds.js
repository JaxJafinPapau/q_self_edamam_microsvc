'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Recipes", [
      {
        url: "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
        label: "Chicken Vesuvio",
        cal_per_serving: 1057,
        baseFood: "chicken"
      },
      {
        url: "http://norecipes.com/recipe/chicken-paprikash/",
        label: "Chicken Paprikash",
        cal_per_serving: 750,
        baseFood: "chicken"
      },
      {
        url: "http://www.marthastewart.com/332664/chicken-gravy",
        label: "Chicken Gravy",
        cal_per_serving: 170,
        baseFood: "chicken"
      },
      {
        url: "http://www.bonappetit.com/columns/breadwinner/article/how-to-get-your-kids-to-eat-sauce-let-them-cook-it-themselves",
        label: "Catalan Chicken",
        cal_per_serving: 300,
        baseFood: "chicken"
      },
      {
        url: "https://food52.com/recipes/3403-citrus-roasted-chicken",
        label: "Citrus Roasted Chicken",
        cal_per_serving: 800,
        baseFood: "chicken"
      },
      {
        url: "https://www.tastingtable.com/entry_detail/chefs_recipes/10154/Matzo_balls_watch_your_back.htm",
        label: "Kreplach (Chicken Dumplings)",
        cal_per_serving: 560,
        baseFood: "chicken"
      },
      {
        url: "http://www.bbcgoodfood.com/recipes/7343/persian-chicken",
        label: "Persian Chicken",
        cal_per_serving: 820,
        baseFood: "chicken"
      },
      {
        url: "http://www.cookstr.com/recipes/twistinrsquo-chicken",
        label: "Twistin’ Chicken",
        cal_per_serving: 70,
        baseFood: "chicken"
      },
      {
        url: "http://www.simplyrecipes.com/recipes/chicken_piccata/",
        label: "Chicken Piccata",
        cal_per_serving: 415,
        baseFood: "chicken"
      },
      {
        url: "http://www.sfgate.com/food/recipes/detail.html?rid=18229&sorig=qs",
        label: "Roast Chicken",
        cal_per_serving: 250,
        baseFood: "chicken"
      },
      {
        url: "http://www.saveur.com/article/Recipes/Roast-Beef",
        label: "Roast Beef",
        cal_per_serving: 900,
        baseFood: "beef"      },
      {
        url: "http://www.bbcgoodfood.com/recipes/2558/",
        label: "Roast Sirloin Of Beef",
        cal_per_serving: 350,
        baseFood: "beef"
      },
      {
        url: "http://www.epicurious.com/recipes/food/views/Beef-Tea-395253",
        label: "Beef Tea",
        cal_per_serving: 257,
        baseFood: "beef"
      },
      {
        url: "http://www.seriouseats.com/recipes/2014/05/homemade-italian-beef-sandwich.html",
        label: "Homemade Italian Beef Recipe",
        cal_per_serving: 840,
        baseFood: "beef"
      },
      {
        url: "http://simplyrecipes.com/recipes/beef_brisket/",
        label: "Beef Brisket",
        cal_per_serving: 326,
        baseFood: "beef"
      },
      {
        url: "http://www.marthastewart.com/341384/beef-stroganoff",
        label: "Beef Stroganoff",
        cal_per_serving: 468,
        baseFood: "beef"
      },
      {
        url: "http://norecipes.com/beef-cheek-confit-with-caramelized-turnips-recipe",
        label: "Beef Cheek Confit With Caramelized Turnips",
        cal_per_serving: 208,
        baseFood: "beef"
      },
      {
        url: "https://food52.com/recipes/14484-portabello-beef-stew",
        label: "Portabello Beef Stew",
        cal_per_serving: 313,
        baseFood: "beef"
      },
      {
        url: "http://www.cookstr.com/recipes/basic-beef",
        label: "Basic Beef",
        cal_per_serving: 245,
        baseFood: "beef"
      },
      {
        url: "https://www.simplyrecipes.com/recipes/beef_wellington/",
        label: "Beef Wellington",
        cal_per_serving: 834,
        baseFood: "beef"
      },
      {
        url: "http://nymag.com/restaurants/articles/recipes/broccolirabe.htm",
        label: "Broccoli Rabe",
        cal_per_serving: 160,
        baseFood: "broccoli"      },
      {
        url: "https://www.marthastewart.com/1155293/broccoli-parmesan",
        label: "Broccoli with Parmesan",
        cal_per_serving: 167,
        baseFood: "broccoli"
      },
      {
        url: "https://food52.com/recipes/6823-grilled-broccoli",
        label: "Grilled Broccoli",
        cal_per_serving: 165,
        baseFood: "broccoli"
      },
      {
        url: "http://www.epicurious.com/recipes/food/views/Broccoli-Almondine-240949",
        label: "Broccoli Almondine",
        cal_per_serving: 204,
        baseFood: "broccoli"
      },
      {
        url: "http://www.bbcgoodfood.com/recipes/2565/",
        label: "Parmesan Broccoli",
        cal_per_serving: 114,
        baseFood: "broccoli"
      },
      {
        url: "http://www.bonappetit.com/recipes/2003/06/broccoli_and_broccoli_rabe_with_roasted_red_peppers",
        label: "Broccoli And Broccoli Rabe With Roasted Red Peppers",
        cal_per_serving: 340,
        baseFood: "broccoli"
      },
      {
        url: "http://www.kitchendaily.com/recipe/broccoli-and-noodle-supreme",
        label: "Broccoli and Noodle Supreme",
        cal_per_serving: 173,
        baseFood: "broccoli"
      },
      {
        url: "http://www.saveur.com/article/Recipes/Sauted-Chinese-Broccoli",
        label: "Sauteed Chinese Broccoli",
        cal_per_serving: 143,
        baseFood: "broccoli"
      },
      {
        url: "http://www.thekitchn.com/recipe-broccoli-casserole-102381",
        label: "Broccoli Casserole",
        cal_per_serving: 287,
        baseFood: "broccoli"
      },
      {
        url: "http://www.foodandwine.com/recipes/jade-broccoli-with-pecans",
        label: "Jade Broccoli With Pecans",
        cal_per_serving: 183,
        baseFood: "broccoli"
      },
      {
        url: "http://leitesculinaria.com/81435/recipes-cereal-milk.html",
        label: "Cereal Milk",
        cal_per_serving: 243,
        baseFood: "milk"      },
      {
        url: "http://www.seriouseats.com/recipes/2010/08/milk-liqueur-recipe.html",
        label: "Milk Liqueur",
        cal_per_serving: 441,
        baseFood: "milk"
      },
      {
        url: "https://smittenkitchen.com/2016/06/strawberry-milk/",
        label: "strawberry milk",
        cal_per_serving: 167,
        baseFood: "milk"
      },
      {
        url: "http://www.marthastewart.com/355547/milk-glaze",
        label: "Milk Glaze",
        cal_per_serving: 203,
        baseFood: "milk"
      },
      {
        url: "http://www.simplyrecipes.com/recipes/strawberry_milk/",
        label: "Extra Strawberry Milk",
        cal_per_serving: 188,
        baseFood: "milk"
      },
      {
        url: "http://www.bonappetit.com/recipe/peanut-milk",
        label: "Peanut Milk",
        cal_per_serving: 221,
        baseFood: "milk"
      },
      {
        url: "http://lacucinaitalianamagazine.com/recipe/fennel_pear_and_radicchio_salad/?gtnjs=1",
        label: "Warm vanilla milk",
        cal_per_serving: 90,
        baseFood: "milk"
      },
      {
        url: "https://food52.com/recipes/30121-homemade-milk-kefir",
        label: "Homemade Milk Kefir",
        cal_per_serving: 184,
        baseFood: "milk"
      },
      {
        url: "http://www.saveur.com/article/Recipes/Milk-Gelato",
        label: "Milk Gelato",
        cal_per_serving: 191,
        baseFood: "milk"
      },
      {
        url: "http://www.bbcgoodfood.com/recipes/2256637/strawberry-milk-pops",
        label: "Strawberry milk pops",
        cal_per_serving: 137,
        baseFood: "milk"
      },
      {
        url: "http://www.seriouseats.com/recipes/2008/01/dinner-tonight-butter-butter-salad.html",
        label: "Dinner Tonight: Butter Butter Salad",
        cal_per_serving: 108,
        baseFood: "butter"      },
      {
        url: "http://www.marthastewart.com/333190/cranberry-butter",
        label: "Cranberry Butter",
        cal_per_serving: 250,
        baseFood: "butter"
      },
      {
        url: "https://food52.com/recipes/13134-raspberry-butter",
        label: "Raspberry Butter",
        cal_per_serving: 152,
        baseFood: "butter"
      },
      {
        url: "http://www.epicurious.com/recipes/food/views/Shrimp-Butter-365796",
        label: "Shrimp Butter",
        cal_per_serving: 211,
        baseFood: "butter"
      },
      {
        url: "http://www.saveur.com/article/Recipes/Brandy-Butter",
        label: "Brandy Butter",
        cal_per_serving: 232,
        baseFood: "butter"
      },
      {
        url: "http://www.jamieoliver.com/recipes/fruit-recipes/christmas-butter/",
        label: "Christmas butter",
        cal_per_serving: 209,
        baseFood: "butter"
      },
      {
        url: "http://www.finecooking.com/recipes/maple-butter.aspx?ac=fp",
        label: "Maple Butter",
        cal_per_serving: 285,
        baseFood: "butter"
      },
      {
        url: "http://www.bbc.co.uk/food/recipes/brandybutter_2535",
        label: "Brandy butter",
        cal_per_serving: 232,
        baseFood: "butter"
      },
      {
        url: "http://www.thekitchn.com/classic-biscuit-recipe-butter-134525",
        label: "Butter Dips",
        cal_per_serving: 193,
        baseFood: "butter"
      },
      {
        url: "https://www.cookinglight.com/recipes/basic-almond-butter-recipe",
        label: "Almond Butter",
        cal_per_serving: 138,
        baseFood: "butter"
      },
    ], {})
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
