import mongoose from 'mongoose';

exports.connect = (url, options) => {
    mongoose.Promise = require('bluebird');
    mongoose.connect(url, options);

    return mongoose.connection;
};