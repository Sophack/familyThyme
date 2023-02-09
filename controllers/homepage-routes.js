
const router = require('express').Router();
const Recipe = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => { //Rendering the login page
    try {
        if (!req.session?.loggedIn) {
        res.render('homepage');
        } else {
            res.redirect('/login');
        }
    } catch (err) {
        console.log(err); 
        res.status(500).json(err);
    }
});

router.get('/homepage', withAuth, async (req, res) => { //Rendering homepage
    try {

         //get routes to try the db data 
    //wait for all the info
    const recipeInfo = await Recipe.findAll({
        include: [
          {
            model: Recipe,
            attributes: ['title', 
            'category'],
          },
        ],
      });
      //we are serializing the data 

    const recipes = recipeInfo.map((recipe) =>
    recipe.get({ plain: true })
  );
        res.render('homepage', {
           recipes
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});




module.exports = router; 