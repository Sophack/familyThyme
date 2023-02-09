const router = require('express').Router();

// Import the model
const Recipe = require('../../models/Recipe');


// CREATE a recipe
router.post('/', (req, res) => {

  //use the model, call the create function & pass params
  Recipe.create({
    //getting user input
    title: req.body.title,
    directions: req.body.directionsAdd,
    category: req.body.category
  })
    //call back function  
    .then((newRecipe) => {
      // Send the newly created row as a JSON object
      res.json(newRecipe);
    })
    //to handle the error
    .catch((err) => {
      res.json(err);
    });
});


//UPDATE a recipe

router.put('/:recipeinfo.title', async (req, res) => {
  try {
  //Calls the update method on the Book model
  const updatedRecipe = await Recipe.update(
    {
      // All the fields you can update and the data attached to the request body.
      title: req.body.title,
      directions: req.body.directionsAdd,
      category: req.body.category
    },
    {
 
      where: {
        recipe: req.params.recipeInfo,
      },
    }
  );
  
  res.json(updatedRecipe); 
    }catch (err) {
          console.log(err);
          res.status(500).json(err);
      }
  }
);

module.exports = router;



