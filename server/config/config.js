const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        PORT: process.env.PORT || 3333,
        URI: 'mongodb+srv://user:user@kermen.egeyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    },
    production: {
        PORT: process.env.PORT,
        URI: 'mongodb+srv://user:user@kermen.egeyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    }
};

module.exports = config[env];