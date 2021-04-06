const mongoose = require('mongoose');
const { URI, config } = require('./config');

const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('Connected to DB!');
    }
    catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB;