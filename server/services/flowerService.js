const Flower = require('../models/Flower');

const create = async (data, creator) => {
    try {
        const flower = new Flower({ ...data, creator });

        return await flower.save();
    }
    catch (e) {
        console.log(e.message);
    }
}

const getAll = async (length) => {
    try {
        let flowers = await Flower.find().lean();

        if (length) flowers.length = length;

        return flowers
    }
    catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    create,
    getAll
}