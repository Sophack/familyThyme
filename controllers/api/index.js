const router = require('express').Router();

const userRoute = require('./userRoutes');
const foodRoute = require('./foodRoutes');
const bodyParser = require('body-parser');


router.use('/users', userRoute);
router.use('/recipes', foodRoute);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = router;