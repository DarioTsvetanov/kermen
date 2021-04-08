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

const getOne = async (flowerId) => {
    try {
        return await Flower.findById(flowerId);
    }
    catch(e) {
        console.log(e.message);
    }
}

const update = async (flowerId, flowerData) => {
    try {
        console.log(flowerData);
        return await Flower.findByIdAndUpdate(flowerId, flowerData);
    }
    catch(e) {
        console.log(e.message);
    }
}

module.exports = {
    create,
    getAll,
    getOne,
    update
}