const router = require('express').Router();
// Here is where we provide hardcoded data to render dynamically





//get one specific recipe & its directions
router.get('/recipe/:directions', async (req, res) => {

    try {
      const dbPaintingData = await Painting.findByPk(req.params.id);
  
      const painting = dbPaintingData.get({ plain: true });
  
      res.render('painting', { painting });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  // This method renders the 'recipe' template, and uses params to select the correct recipe to render in the template, based on the id of the recipe.
  return res.render('recipe', directions[req.params.id - 1]);
 
//passing the dishes object & now available in the template 




module.exports = router;
