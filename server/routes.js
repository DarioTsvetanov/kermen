const { Router } = require('express');
const router = Router();

const flowerController = require('./controllers/flowerController');

router.use('/', flowerController);

module.exports = router;