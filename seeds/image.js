//this data will be displayed in the application before users manually add 
const { Recipe } = require('../models')


const recipeImage = [

    {
      title: 'Moms Spaghetti',
      image: '../images/',
      category: 'easy meals',
    },
    {
      title: 'Nonnas Broccoli Soup',
      image: '../images/',
      category: 'gourmet meals',
    },
    {
      title: 'Penne Arriabata',
      image: '../images/',
      category: 'easy meals',
      },
    {
      title: 'Beef Roast',
      image: '../images/',
      category: 'gourmet meals',
    },
    {
      title: 'Bread Pudding',
      image: '../images/',
      category: 'dessert',
    },
  ];

const seedRecipes = () => Recipe.bulkCreate(recipeImage);

module.exports = seedRecipes;