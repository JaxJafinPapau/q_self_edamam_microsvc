'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    url: DataTypes.STRING,
    label: DataTypes.STRING,
    cal_per_serving: DataTypes.INTEGER,
    baseFood: DataTypes.STRING,
    num_of_ingredients: DataTypes.INTEGER
  }, {});
  Recipe.associate = function(models) {
  };
  return Recipe;
};
