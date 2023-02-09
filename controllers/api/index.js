const router = require('express').Router();

const userRoute = require('./userRoutes');
const foodRoute = require('./foodRoutes');
const bodyParser = require('body-parser');


router.use('/users', userRoute);
router.use('/recipes', foodRoute);

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

module.exports = router;