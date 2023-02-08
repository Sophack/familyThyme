const router = require('express').Router();
// Here is where we provide hardcoded data to render dynamically



router.get('/', async (req, res) => {
  // put a try/catch in there
  res.render('directions');
});

//get one specific dish
router.get('/recipe/:title', async (req, res) => {
  // This method renders the 'recipe' template, and uses params to select the correct recipe to render in the template, based on the id of the recipe.
  return res.render('recipe', directions[req.params.num - 1]);
  //it's -1 because its the start of an array? 
});

//passing the dishes object & now available in the template 




module.exports = router;
