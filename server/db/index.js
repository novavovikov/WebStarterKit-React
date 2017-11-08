import mongoose from 'mongoose';

exports.connect = (url) => {
    mongoose.Promise = require('bluebird');

    const options = {
        useMongoClient: true
    };

    mongoose.connect(url, options);
    return mongoose.connection;
};