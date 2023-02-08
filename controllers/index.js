const router = require('express').Router();



//API routes 

const htmlRoute = require('./homepage-routes');
const apiRoute = require('./api');

router.use('/', htmlRoute);
router.use('/api', apiRoute);

module.exports = router;