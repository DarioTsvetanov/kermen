// import mongoose 
const mongoose = require('mongoose');

// create flower schema
const flowerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    imageURL: {
        type: String,
    },
    description: {
        type: String,
    },
    creator: {
        type: String
    },
    isBought: {
        type: Boolean,
        default: false
    },
    peopleBought: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Flower', flowerSchema);