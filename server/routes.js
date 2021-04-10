const { Router } = require('express');
const router = Router();

const flowerController = require('./controllers/flowerController');

router.use('/', flowerController);

router.get('/', (req, res) => {
    res.send('Hello World');
})

module.exports = router;