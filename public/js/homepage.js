const recipeInfo = require('./recipe.js');

function addRecipe(title, category, directions) {
  recipeInfo.push({
    Title: title,
    Category: category,
    Directions: directions
  });
}

module.exports = {
  addRecipe
};

// Takes in user input and adds the recipe data to the recipe array
  