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

const getAll = async () => {
    try {
        return await Flower.find().lean();
    }
    catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    create,
    getAll
}