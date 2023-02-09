//this data will be displayed in the application before users manually add 
const { Recipe } = require('../models')

const recipeInfo = [

    {
      title: 'Moms Spaghetti',
      directions: 'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.\r\n\r\nStir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.\r\n\r\nMeanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.',
      category: 'easy meals',
    },
    {
      title: 'Nonnas Broccoli Soup',
      directions:
        'Heat oil in a large saucepan and then add the onions. Cook on a medium heat until soft. Add a splash of water if the onions start to catch.\r\n\r\nAdd the celery, leek, potato and a knob of butter. Stir until melted, then cover with a lid. Allow to sweat for 5 minutes. Remove the lid.\r\n\r\nPour in the stock and add any chunky bits of broccoli stalk. Cook for 10 – 15 minutes until all the vegetables are soft.\r\n\r\nAdd the rest of the broccoli and cook for a further 5 minutes. Carefully transfer to a blender and blitz until smooth. Stir in the stilton, allowing a few lumps to remain. Season with black pepper and serve.',
        category: 'gourmet meals',
    },
    {
      title: 'Penne Arriabata',
      directions:
        'Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.',
        category: 'easy meals',
      },
    {
      title: 'Beef Roast',
      directions: 'Cook the Broccoli and Carrots in a pan of boiling water until tender.\r\n\r\nRoast the Beef and Potatoes in the oven for 45mins, the potatoes may need to be checked regularly to not overcook.\r\n\r\nTo make the Yorkshire puddings:\r\nHeat oven to 230C/fan 210C/gas 8. Drizzle a little sunflower oil evenly into 2 x 4-hole Yorkshire pudding tins or a 12-hole non-stick muffin tin and place in the oven to heat through\r\nTo make the batter, tip 140g plain flour into a bowl and beat in four eggs until smooth. Gradually add 200ml milk and carry on beating until the mix is completely lump-free. Season with salt and pepper. Pour the batter into a jug, then remove the hot tins from the oven. Carefully and evenly pour the batter into the holes. Place the tins back in the oven and leave undisturbed for 20-25 mins until the puddings have puffed up and browned. Serve immediately.\r\n\r\nPlate up and add the Gravy as desired.',
      category: 'gourmet meals',
    },
    {
      title: 'Bread Pudding',
      directions: 'Grease a 1 litre/2 pint pie dish with butter.\r\nCut the crusts off the bread. Spread each slice with on one side with butter, then cut into triangles.\r\nArrange a layer of bread, buttered-side up, in the bottom of the dish, then add a layer of sultanas. Sprinkle with a little cinnamon, then repeat the layers of bread and sultanas, sprinkling with cinnamon, until you have used up all of the bread. Finish with a layer of bread, then set aside.\r\nGently warm the milk and cream in a pan over a low heat to scalding point. Dont let it boil.\r\nCrack the eggs into a bowl, add three quarters of the sugar and lightly whisk until pale.\r\nAdd the warm milk and cream mixture and stir well, then strain the custard into a bowl.\r\nPour the custard over the prepared bread layers and sprinkle with nutmeg and the remaining sugar and leave to stand for 30 minutes.\r\nPreheat the oven to 180C/355F/Gas 4.\r\nPlace the dish into the oven and bake for 30-40 minutes, or until the custard has set and the top is golden-brown.',
      category: 'dessert',
    },
  ];

const seedRecipes = () => Recipe.bulkCreate(recipeInfo);

module.exports = seedRecipes;