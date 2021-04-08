const { Router } = require('express');
const router = Router();

const flowerService = require('../services/flowerService');

router.post('/', async (req, res) => {
    try {
        const flower = await flowerService.create(req.body, 'dario');
        return res.json(flower);
    }
    catch (e) {
        console.log(e.message);
    }
});

router.get('/', async (req, res) => {
    try {
        const flowers = await flowerService.getAll();

        return res.json(flowers)
    }
    catch (e) {
        console.log(e.message);
    }
})

router.get('/flowers/:flowerId', async (req, res) => {
    try {
        const flower = await flowerService.getOne(req.params.flowerId);
        
        return res.json(flower);
    }
    catch (e) {
        console.log(e.message);
    }
});

module.exports = router;