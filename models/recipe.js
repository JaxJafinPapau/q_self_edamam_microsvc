'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    url: DataTypes.STRING,
    label: DataTypes.STRING,
    cal_per_serving: DataTypes.INTEGER,
    baseFood: DataTypes.STRING
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
  };
  return Recipe;
};
