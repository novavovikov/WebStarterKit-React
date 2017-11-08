const mongoose = require('mongoose');

const artistsSchema = mongoose.Schema({
    name: String
});

artistsSchema.statics.findUsersByName = function (name, cb) {
    return this.find({
        name: new RegExp(name, 'i')
    }, cb);
};

const Artist = mongoose.model('Artist', artistsSchema);

module.exports = Artist;