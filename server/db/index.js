import mongoose from 'mongoose';

exports.connect = function(url, cb) {
    mongoose.connect(url, {
        useMongoClient: true
    });

    const db = mongoose.connection;
    db.on('error', err => {
        cb(err);
    });
    db.once('open', () => {
        cb();
    });
};