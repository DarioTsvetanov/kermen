const Flower = require('../models/Flower');

const create = async (data) => {
    try {
        const flower = new Flower(data);

        return await flower.save();
    }
    catch (e) {
        console.log(e.message);
    }
}

const getAll = async (currentUser) => {
    try {
        let flowers = [];
        if (currentUser) flowers = await Flower.find({ creator: currentUser }).lean();
        else flowers = await Flower.find().lean();

        return flowers;
    }
    catch (error) {
        console.log(error.message);
    }
}

const getOne = async (flowerId) => {
    try {
        return await Flower.findById(flowerId);
    }
    catch (e) {
        console.log(e.message);
    }
}

const update = async (flowerId, flowerData) => {
    try {
        return await Flower.findByIdAndUpdate(flowerId, flowerData);
    }
    catch (e) {
        console.log(e.message);
    }
}

const deleteFlower = async (flowerId) => {
    try {
        return Flower.findByIdAndDelete(flowerId);
    }
    catch (e) {
        console.log(e.message + 'in BE delete flower service');
    }
}

module.exports = {
    create,
    getAll,
    getOne,
    update,
    deleteFlower
}